import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import features from "./data/features.js"
import Feature from "./models/featureModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()

        await Feature.insertMany(features)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    }
    catch (err) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Feature.deleteMany()
        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    }
    catch (err) {
        console.error(`${err}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}