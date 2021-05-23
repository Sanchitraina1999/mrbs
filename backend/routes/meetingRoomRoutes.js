import express from 'express'
const router = express.Router()
import { getMeetingRooms,getMeetingRoomById,getAvailabilityById } from '../controllers/meetingRoomController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(protect, getMeetingRooms)
router.route('/:id').get(protect,getMeetingRoomById)
router.route('/availability/:id').post(protect,getAvailabilityById)
router.route('/book/:id').patch(protect,bookMeetingRoom)
export default router