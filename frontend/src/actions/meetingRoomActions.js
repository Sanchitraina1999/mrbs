import axios from 'axios'
import {
    MEETING_ROOM_LIST_REQUEST,
    MEETING_ROOM_LIST_SUCCESS,
    MEETING_ROOM_LIST_FAIL,
    MEETING_ROOM_DETAILS_REQUEST,
    MEETING_ROOM_DETAILS_SUCCESS,
    MEETING_ROOM_DETAILS_FAIL
} from '../constants/meetingRoomConstants'

export const listMeetingRooms = () => async (dispatch, getState) => {
    try {
        dispatch({ type: MEETING_ROOM_LIST_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get('/api/meetingRooms', config)
        dispatch({ type: MEETING_ROOM_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: MEETING_ROOM_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const listMeetingRoomDetails = (id) => async (dispatch,getState) => {
    try {
        dispatch({ type: MEETING_ROOM_DETAILS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/meetingRooms/${id}`, config)
        dispatch({ type: MEETING_ROOM_DETAILS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: MEETING_ROOM_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const getAvailablityOfMeetingRoom = () => async (dispatch,getState) => {
    try {
        dispatch({ type: MEETING_ROOM_DETAILS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/meetingRooms/${id}`, config)
        dispatch({ type: MEETING_ROOM_DETAILS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: MEETING_ROOM_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}