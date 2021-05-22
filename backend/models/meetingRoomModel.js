import mongoose from 'mongoose'

const meetingRoomSchema = mongoose.Schema({
    roomName: {type: String,required: true},
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true }
    },
    pointOfContact: {
        name: { type: String, required: true},
        mobile: { type: String, required: true}
    }
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ]
}, {
    timestamps: true
})

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema)

export default MeetingRoom