import express from 'express'
const router = express.Router()
import { updateUserProfile } from '../controllers/meetingRoomController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').put(protect, updateUserProfile)

export default router