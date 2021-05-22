import express from 'express'
const router = express.Router()
import { getMeetingRooms,getMeetingRoomById } from '../controllers/meetingRoomController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(protect, getMeetingRooms)
router.route('/:id').get(protect,getMeetingRoomById)

export default router