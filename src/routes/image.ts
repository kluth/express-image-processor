import { Router } from 'express'

import ImageController from '../controllers/image'

const router = Router()

router.get('/:imageName/resize/:height/:width/:fileType', ImageController.resize)
router.get('/:imageName/monochrome/:fileType', ImageController.monochrome)

export default router
