import express from 'express'
import { config } from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import path from 'path'

import connectDB from "./config/db.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import featureRoutes from './routes/featureRoutes.js'
import userRoutes from './routes/userRoutes.js'
import meetingRoomRoutes from './routes/meetingRoomRoutes.js'

config()

const app = express()
connectDB()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.use('/api/features', featureRoutes)
app.use('/api/users', userRoutes)
app.use('/api/meetingRooms', meetingRoomRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}
else {
    app.get('/', (req, res) => {
        console.log(typeof process.env.MONGO_URI)
        res.send("API is running")
    })
}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})