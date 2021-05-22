import asyncHandler from 'express-async-handler'
import MeetingRoom from '../models/meetingRoomModel.js'
import generateToken from '../utils/generateTokens.js'

//@desc Auth a User & get a taken
//@route POST /api/users/login
//@access Public
const getMeetingRooms = asyncHandler(async (req, res) => {

    const rooms = await Feature.find({})
    res.json(rooms)
    const { email, password } = req.body
    const user = await MeetingRoom.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

export { getMeetingRooms }