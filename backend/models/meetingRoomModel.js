import mongoose from 'mongoose'

const meetingRoomSchema = mongoose.Schema({
    roomName: { type: String, required: true },
    image: {
        type: String,
        required: true
    },
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
            startDate: { type: moment(Date).format('yyyy-MM-DD[T]hh:mm'), required: true },
            endDate: { type: moment(Date).format('yyyy-MM-DD[T]hh:mm'), required: true },
            bookedBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
            purposeOfBooking: {type: String, required: true}
        }
    ]
}, {
    timestamps: true
})

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema)

export default MeetingRoom