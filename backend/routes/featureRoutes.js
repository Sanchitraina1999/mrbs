import express from 'express'
const router = express.Router()
import { getProducts } from '../controllers/featureController.js'

router.route('/').get(getFeatures)

export default router