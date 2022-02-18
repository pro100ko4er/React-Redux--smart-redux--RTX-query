import React, { useState } from 'react';
import { IPost } from '../models/IPost';
import { IUser } from '../models/IUser';
import { UserApi } from '../service/UserServices';
import { UserItem } from './UserItem';
import '../styles/Post.css'
export default function UserContainer() {
    const [limit, setLimit] = useState(15)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const { error, data: users, isLoading, refetch } = UserApi.useGetUsersQuery(limit, {
        pollingInterval: 1000
    })
    const [createPost, { }] = UserApi.useCreatePostMutation()
    const [deletePost, { }] = UserApi.useDeletePostMutation()
    const [updatePost, { }] = UserApi.useUpdatePostMutation()
    const createNewPost = async () => {
        await createPost({ id: Date.now(), title: title, body: text })
    }
    const deletePostApi = async (id: number) => {
        deletePost(id)
    }
    const updatePostApi = async (post: IPost) => {
        updatePost(post)
    }
    return (
        <div className="user__list">
            <button onClick={() => setLimit(limit + 1)}>Прибавить пост</button>
            <button onClick={() => refetch()}>Refetch</button>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type={'text'} placeholder='Название' />
            <input value={text} onChange={(e) => setText(e.target.value)} type={'text'} placeholder='Текст' />
            <button onClick={() => createNewPost()}>Add new post</button>
            {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>Ошибка</h1>}
            {users && users.map((item: IPost) => {
                return <UserItem key={item.id} user={item} remove={deletePostApi} update={updatePostApi} />
            })}
        </div>
    )
}