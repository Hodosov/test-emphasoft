import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, sortAsyncId, filterUsers } from '../store/rootReducer'
import TextField from '@material-ui/core/TextField'
import { UserList } from './UserList'

export const UserPage = () => {

    const dispatch = useDispatch()

    const users = useSelector(state => state.users)
    
    const onChangeHandler = (value) => {
        dispatch(filterUsers(value.toLowerCase()))
    }
    const get = () => {
        dispatch(sortAsyncId())
    }

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', width: '100%', padding: '10px'}}>
            <h1>User Page</h1>
            <button onClick={get}>get</button>
            <TextField
                placeholder='search...'
                onChange={(e) => onChangeHandler(e.target.value)}
            />
            <UserList
                allUsers={users}
            />
        </div>
    )
}