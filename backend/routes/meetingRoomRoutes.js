import express from 'express'
const router = express.Router()
import { getMeetingRooms } from '../controllers/meetingRoomController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(protect, getMeetingRooms)

export default router