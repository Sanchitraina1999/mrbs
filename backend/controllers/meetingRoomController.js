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
//@route POST /api/meetingRooms/availability/id
//@access Private
const getAvailabilityById = asyncHandler(async (req, res) => {
    const { startDateTime, endDateTime } = req.body

    const meetingRoom = await MeetingRoom.findById(req.params.id)
    if (meetingRoom) {
        const bookedTimes = meetingRoom.bookedTimes
        console.log(bookedTimes, 'bookedTimes')
        console.log(startDateTime, 'startDateTime')
        console.log(endDateTime, 'endDateTime')
        const isAvailable = bookedTimes.every((time) => {
            return (((startDateTime < time.startDate) && (endDateTime < time.startDate)) || ((startDateTime > time.endDate) && (endDateTime > time.endDate)))
        })
        console.log(isAvailable, 'isAvailable')
        if (isAvailable)
            res.json(true)
        else
            res.json(false)
    }
    else {
        res.status(404)
        throw new Error('Cannot get meeting room')
    }
})

//@desc  Book meeting room 
//@route PUT /api/meetingRooms/book/:id
//@access Private
const bookMeetingRoom = asyncHandler(async (req, res) => {
    const { startDateTime, endDateTime, userid, purposeOfBooking } = req.body
    const meetingRoom = await MeetingRoom.findById(req.params.id)
    if (meetingRoom) {
        meetingRoom.bookedTimes.push({
            startDate: startDateTime,
            endDate: endDateTime,
            bookedBy: userid,
            purposeOfBooking
        })
        const updatedMeetingRoom = await meetingRoom.save()
        res.json(updatedMeetingRoom)
    }
    else {
        res.status(404)
        throw new Error('Cannot get meeting room')
    }
})

//@desc  Get user's meetings
//@route PUT /api/meetingRooms/myMeetings/:id
//@access Private
const getMyMeetings = asyncHandler(async (req, res) => {
    const meetingRooms = await MeetingRoom.find({})
    {console.log(req.params.id)}
    if (meetingRooms) {
        var myMeetings = []
        {console.log(meetingRooms,'meetingRooms')}
        meetingRooms.map((room)=>{
            room.bookedTimes.map((booking)=>{
                if(booking.bookedBy == req.params.id){
                    myMeetings.push({
                        room: room._id,
                        roomName: room.roomName,
                        startDateTime: booking.startDate,
                        endDateTime: booking.endDate,
                        purposeOfBooking: booking.purposeOfBooking
                    })
                }
            })
        })
        myMeetings.sort((a, b) => (a.startDateTime > b.startDateTime) ? 1 : ((b.startDateTime > a.startDateTime) ? -1 : 0))
        { console.log(myMeetings, 'myMeetings') }
        res.json(myMeetings)
    }
    else {
        res.status(404)
        throw new Error('Cannot get meeting room')
    }
})

export { getMeetingRooms, getMeetingRoomById, getAvailabilityById, bookMeetingRoom, getMyMeetings }