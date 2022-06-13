import { Request, Response } from 'express'
import * as fs from 'fs'

export class ImageController {
	resize(req: Request, res: Response) {
		fs.readFile('../../images/*', (err, data) => {
			if (err) {
				res.status(500).send(err)
			} else {
				res.status(200).send(data)
			}
		})
	}

	monochrome(req: Request, res: Response) {
		res.status(200).send('monochrome')
	}
}

export default new ImageController()
