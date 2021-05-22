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
            email: 'email@example.com'
        },
        bookedTimes: [
            {
                startDate: 'Sat, 22 May 2021 08:54:22 GMT',
                endDate: 'Sat, 22 May 2021 08:54:22 GMT',
                bookedBy: { type: String, required: true },
                name: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
                image: { type: String, required: true }
            }
        ]
    }
]

export default users