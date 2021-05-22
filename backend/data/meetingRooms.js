const users = [
    {
        roomName: 'Room Name',
        location: {
            address: 'Address',
            city: 'City'
        },
        pointOfContact: {
            name: 'POC Name',
            mobile: '+91 1234567890',
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