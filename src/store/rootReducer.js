import { AUTH_USER, GET_USERS } from './types'
import { Api } from '../api/api'

const initialState = {
    isAuth: false,
    users: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        default: return state
    }
}

export const setAuthUserActionCreator = (isAuth) => ({
    type: AUTH_USER,
    isAuth
})

export const getUsersActionCreator = (users) => ({
    type: GET_USERS,
    users
})

export const setAuthUser = (value) => async (dispatch) => {
    let response = await Api.auth(value)
    if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        dispatch(setAuthUserActionCreator(true))
    }
}

export const getAllUsers = () => async (dispatch) => {
    let response = await Api.getUsers()
    dispatch(getUsersActionCreator(response.data))
}

export const filterUsers = (value) => async(dispatch) => {
    let response = await Api.getUsers()
    let users = await response.data.filter((el) => {
        const searchValue = el.username.toLowerCase()
        return searchValue.indexOf(value.trim()) !== -1 || !value
    })
    dispatch(getUsersActionCreator(users))
}

export const sortAsyncId = () => async(dispatch) => {
    let response = await Api.getUsers()
    let users = response.data.sort(function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    })
    dispatch(getUsersActionCreator(users))
}