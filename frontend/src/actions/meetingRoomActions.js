import axios from 'axios'
import { 
    MEETING_ROOM_LIST_REQUEST, 
    MEETING_ROOM_LIST_SUCCESS, 
    MEETING_ROOM_LIST_FAIL,
} from '../constants/meetingRoomConstants'

export const listFeatures = () => async (dispatch) => {
    try {
        dispatch({ type: MEETING_ROOM_LIST_REQUEST })
        const { data } = await axios.get('/api/meetingRooms')
        dispatch({ type: MEETING_ROOM_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: MEETING_ROOM_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}