import { Router, Request, Response } from 'express'

import ImageController from '../controllers/image'

const router = Router()

// router.get('/resize', ImageController.resize)
// router.get('/monochrome', ImageController.monochrome)

router.get('/:imageName/resize/:height/:width/:fileType', ImageController.resize)
router.get('/:imageName/monochrome/:fileType', ImageController.monochrome)

export default router
