import { Router, Request, Response } from 'express'

import ImageController from '../controllers/image'

const router = Router()

// router.get('/resize', ImageController.resize)
// router.get('/monochrome', ImageController.monochrome)

router.get('/', ImageController.resize)

export default router
