import express from 'express'
import { config } from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
config()

const app = express()
connectDB()

app.use(express.json())

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("API is running")
})

app.use('/api/features', featureRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})