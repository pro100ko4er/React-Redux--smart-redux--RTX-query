import { useEffect } from 'react'
import UserContainer from './components/UserContainer'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { IUser } from './models/IUser'
import { FetchUsers } from './store/reducers/ActionCreators'
export default function App(): JSX.Element {
    const dispatch = useAppDispatch()
    const { error, isLoading, users } = useAppSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(FetchUsers())
        console.log(users)
    }, [])
    return (
        <UserContainer />
    )
}