import axios from 'axios'
import {
    MEETING_ROOM_LIST_REQUEST,
    MEETING_ROOM_LIST_SUCCESS,
    MEETING_ROOM_LIST_FAIL,
    MEETING_ROOM_DETAILS_REQUEST,
    MEETING_ROOM_DETAILS_SUCCESS,
    MEETING_ROOM_DETAILS_FAIL,
    MEETING_ROOM_AVAILABILITY_REQUEST,
    MEETING_ROOM_AVAILABILITY_SUCCESS,
    MEETING_ROOM_AVAILABILITY_FAIL,
    MEETING_ROOM_BOOKING_REQUEST,
    MEETING_ROOM_BOOKING_SUCCESS,
    MEETING_ROOM_BOOKING_FAIL,
    MY_MEETINGS_REQUEST,
    MY_MEETINGS_SUCCESS,
    MY_MEETINGS_FAIL,
    DELETE_MEETING_REQUEST,
    DELETE_MEETING_SUCCESS,
    DELETE_MEETING_FAIL
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

export const listMeetingRoomDetails = (id) => async (dispatch, getState) => {
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

export const getAvailablityOfMeetingRoom = (id, startDateTime, endDateTime) => async (dispatch, getState) => {
    try {
        dispatch({ type: MEETING_ROOM_AVAILABILITY_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(
            `/api/meetingRooms/availability/${id}`,
            { startDateTime, endDateTime },
            config)
        dispatch({ type: MEETING_ROOM_AVAILABILITY_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: MEETING_ROOM_AVAILABILITY_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const bookMeetingRoom = (id, startDateTime, endDateTime, userid, purposeOfBooking) => async (dispatch, getState) => {
    try {
        dispatch({ type: MEETING_ROOM_BOOKING_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(
            `/api/meetingRooms/book/${id}`,
            { startDateTime, endDateTime, userid, purposeOfBooking },
            config)
        dispatch({ type: MEETING_ROOM_BOOKING_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: MEETING_ROOM_BOOKING_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : error.message
        })
    }
}

export const getMyMeetings = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: MY_MEETINGS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(
            `/api/meetingRooms/myMeetings/${id}`,
            config
        )
        dispatch({ type: MY_MEETINGS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: MY_MEETINGS_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : error.message
        })
    }
}

export const removeMeeting = (bookedTimeId) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_MEETING_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.delete(
            `/api/meetingRooms/deleteMeeting/${bookedTimeId}`,
            config
        )
        dispatch({ type: DELETE_MEETING_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: DELETE_MEETING_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : error.message
        })
    }
}