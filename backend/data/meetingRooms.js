const users = [
    {
        roomName: 'Room Name',
        location: {
            address: 'Address',
            city: { type: String, required: true }
        },
        pointOfContact: {
            name: { type: String, required: true },
            mobile: { type: Number, required: true },
            email: { type: String, required: true }
        },
        bookedTimes: [
            {
                startDate: { type: Date, required: true },
                endDate: { type: Date, required: true },
                bookedBy: { type: String, required: true },
                name: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
                image: { type: String, required: true }
            }
        ]
    }
]

export default users