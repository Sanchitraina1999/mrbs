import mongoose from 'mongoose'

const meetingRoomSchema = mongoose.Schema({
    roomName: { type: String, required: true },
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true }
    },
    pointOfContact: {
        name: { type: String, required: true },
        mobile: { type: String, required: true },
        email: { type: String, required: true }
    },
    bookedTimes: [
        {
            startDate: { type: Date, required: true },
            endDate: { type: Date, required: true },
            bookedBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
            image: { type: String, required: true }
        }
    ]
}, {
    timestamps: true
})

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema)

export default MeetingRoom