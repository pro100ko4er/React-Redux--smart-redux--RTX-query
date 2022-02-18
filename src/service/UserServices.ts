import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../models/IPost'
export const UserApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
    endpoints: (build) => ({
        getUsers: build.query<IPost[], number>({
            query: (limit) => ({
                url: '/posts',
                params: {
                    _limit: limit,

                }
            })
        }),
        createPost: build.mutation<IPost, IPost>({
            query: newPost => ({
                url: '/posts',
                method: 'post',
                body: newPost
            })
        }),
        deletePost: build.mutation({
            query: deletePost => ({
                url: `/posts/${deletePost}`,
                method: 'delete',
            })
        }),
        updatePost: build.mutation({
            query: updatePost => ({
                url: `/posts/${updatePost.id}`,
                method: 'put',
                body: updatePost
            })
        })
    })
})

export const { useGetUsersQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = UserApi