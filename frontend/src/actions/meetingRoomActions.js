import axios from 'axios'
import { 
    MEETING_ROOM_LIST_REQUEST, 
    MEETING_ROOM_LIST_SUCCESS, 
    MEETING_ROOM_LIST_FAIL,
} from '../constants/meetingRoomConstants'

export const listMeetingRooms = () => async (dispatch) => {
    try {

        
        
        const { data } = await axios.post(
            '/api/users/',
            { username, email, password },
            config
        )
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        dispatch({ type: USER_LOGIN_SUCCESS, loginSuccess: true, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))

        dispatch({ type: MEETING_ROOM_LIST_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer + 
            }
        }
        const { data } = await axios.get('/api/meetingRooms',config)
        dispatch({ type: MEETING_ROOM_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: MEETING_ROOM_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}