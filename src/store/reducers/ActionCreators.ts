import axios from 'axios'
import { IUser } from '../../models/IUser'
import { bindActionCreators, createAsyncThunk } from '@reduxjs/toolkit'
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.fetchUsers())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.fetchSuccessUsers(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.fetchErrorUsers('Произошла ошибка'))
//     }
// }

export const FetchUsers = createAsyncThunk(
    'user/fetchAll',
    async () => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceolder.typicode.com/users')
            return res.data
        } catch (error) {
            return 'Ошибка соединения'
        }
    }
)