import express from 'express'
import { config } from 'dotenv'
import colors from 'colors'
import Recaptcha from 'express-recaptcha'

import connectDB from "./config/db.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import featureRoutes from './routes/featureRoutes.js'
import userRoutes from './routes/userRoutes.js'

config()

const app = express()
connectDB()

app.use(express.json())


var recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY', process.env.RECAPTCHA_);
//or with options
var options = {'hl':'de'};
var recaptcha = new Recaptcha('SITE_KEY', 'SECRET_KEY', options);

const PORT = process.env.PORT

app.get('/', (req, res) => {
    console.log(typeof process.env.MONGO_URI)
    res.send("API is running")
})

app.use('/api/features', featureRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})