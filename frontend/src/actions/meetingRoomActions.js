import axios from 'axios'
import { 
    MEETING_ROOM_LIST_REQUEST, 
    MEETING_ROOM_LIST_SUCCESS, 
    MEETING_ROOM_LIST_FAIL,
} from '../constants/meetingRoomConstants'

export const listMeetingRooms = () => async (dispatch) => {
    try {
        dispatch({ type: MEETING_ROOM_LIST_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get('/api/meetingRooms',config)
        dispatch({ type: MEETING_ROOM_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: MEETING_ROOM_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}