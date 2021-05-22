import asyncHandler from 'express-async-handler'
import MeetingRoom from '../models/meetingRoomModel.js'
import generateToken from '../utils/generateTokens.js'

//@desc Auth a User & get a taken
//@route POST /api/users/login
//@access Public
const getMeetingRooms = asyncHandler(async (req, res) => {
    const meetingRooms = await MeetingRoom.find({})
    if (meetingRooms) {
        res.json(meetingRooms)
    }
    else {
        res.status(404)
        throw new Error('Cannot get meeting rooms')
    }
})

export { getMeetingRooms }