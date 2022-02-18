import React, { FC } from 'react';
import { IPost } from '../models/IPost';
import { IUser } from '../models/IUser';

interface IPostProps {
    user: IPost,
    remove: (id: number) => void,
    update: (post: IPost) => void
}
export const UserItem: FC<IPostProps> = ({ user, remove, update }) => {
    const updatingPost = () => {
        const title = prompt() || ''
        update({ ...user, title: title })
    }
    return (
        <div className="post__data">
            <div className="title__post">{user.id} {user.title}</div>
            <hr />
            <div className="post__body__wrap">
                <div className="post__body">
                    <div className="title__desc">Описание</div>
                    <div>{user.body}</div>
                </div>
                <button onClick={() => remove(user.id)}>Удалить пост</button>
                <button onClick={() => updatingPost()}>Изменить пост</button>
            </div>
        </div>
    )
}