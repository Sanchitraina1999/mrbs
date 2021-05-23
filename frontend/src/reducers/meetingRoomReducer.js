import {
    MEETING_ROOM_LIST_REQUEST,
    MEETING_ROOM_LIST_SUCCESS,
    MEETING_ROOM_LIST_FAIL,
    MEETING_ROOM_DETAILS_REQUEST,
    MEETING_ROOM_DETAILS_SUCCESS,
    MEETING_ROOM_DETAILS_FAIL
} from '../constants/meetingRoomConstants'

export const meetingRoomReducer = (state = { meetingRooms: [] }, action) => {
    switch (action.type) {
        case MEETING_ROOM_LIST_REQUEST:
            return { ...state, loading: true }
        case MEETING_ROOM_LIST_SUCCESS:
            return { loading: false, meetingRooms: action.payload }
        case MEETING_ROOM_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const meetingRoomDetailsReducer = (state = { meetingRoom: { } }, action) => {
    switch (action.type) {
        case MEETING_ROOM_DETAILS_REQUEST:
            return { loading: true, ...state };
        case MEETING_ROOM_DETAILS_SUCCESS:
            return { loading: false, meetingRoom: action.payload }
        case MEETING_ROOM_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const meetingRoomAvailableReducer = (state = { available: false }, action) => {
    switch (action.type) {
        case MEETING_ROOM_DETAILS_REQUEST:
            return { loading: true, ...state };
        case MEETING_ROOM_DETAILS_SUCCESS:
            return { loading: false, meetingRoom: action.payload }
        case MEETING_ROOM_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}