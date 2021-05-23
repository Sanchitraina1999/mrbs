import asyncHandler from 'express-async-handler'
import MeetingRoom from '../models/meetingRoomModel.js'
import generateToken from '../utils/generateTokens.js'

//@desc get all meeting rooms
//@route GET /api/meetingRooms
//@access Private
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

//@desc  get a meeting room by Id
//@route GET /api/meetingRooms/id
//@access Private
const getMeetingRoomById = asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const meetingRoom = await MeetingRoom.findById(req.params.id)
    if (meetingRoom) {
        res.json(meetingRoom)
    }
    else {
        res.status(404)
        throw new Error('Cannot get meeting room')
    }
})

//@desc  Get meeting room availability by Id
//@route GET /api/meetingRooms/availability/:id
//@access Private
const getMeetingRoomById = asyncHandler(async (req, res) => {
    const {startDateTime, endDateTime} = req.body
    const meetingRoom = await MeetingRoom.findById(req.params.id)
    if (meetingRoom) {
        res.json(meetingRoom)
    }
    else {
        res.status(404)
        throw new Error('Cannot get meeting room')
    }
})

export { getMeetingRooms, getMeetingRoomById }