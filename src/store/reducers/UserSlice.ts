import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { FetchUsers, } from './ActionCreators';

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string | null,
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        [FetchUsers.pending.type]: (state) => {
            state.isLoading = true;
            state.count = 10;
            state.error = null;
        },
        [FetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null
        },
        [FetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }

})

export default userSlice.reducer