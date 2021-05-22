import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILURE,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAILURE,
    USER_EMAIL_REQUEST,
    USER_EMAIL_SUCCESS,
    USER_EMAIL_FAILURE
} from '../constants/userConstants'

export const login = (email, password, keepLoggedIn) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(
            '/api/users/login',
            { email, password },
            config
        )
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        if (keepLoggedIn) localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    
    dispatch({ type: USER_LOGOUT })
}

export const register = (username, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(
            '/api/users/',
            { username, email, password },
            config
        )
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(
            `/api/users/${id}`,
            config
        )
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: USER_DETAILS_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const updateUserProfileDetails = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(
            `/api/users/profile`,
            user,
            config
        )
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })
        logout()
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const getUser = (email) => async (dispatch) => {
    console.log(email)
    try {
        dispatch({ type: USER_EMAIL_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(
            '/api/users/profileByEmail',
            { email},
            config
        )
        dispatch({ type: USER_EMAIL_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: USER_EMAIL_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}
