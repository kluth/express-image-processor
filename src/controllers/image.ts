import { Request, Response } from 'express'
import * as fs from 'fs'
import sharp from 'sharp'

export class ImageController {
	resize(req: Request, res: Response) {
		console.log(req.params)
		fs.readFile(`./images/${req.params.imageName}`, (err, data) => {
			if (err) {
				res.status(404).send(err)
			} else {
				sharp(data)
					.resize(+req.params.height, +req.params.width)
					.toBuffer((err, buffer) => {
						if (err) {
							res.status(500).send(err)
						} else {
							fs.writeFile(
								`./images/${req.params.height}x${req.params.width}.${req.params.fileType}`,
								buffer,
								(err) => {
									if (err) {
										res.status(500).send(err)
									}
									res.status(200).sendFile(`./images/${req.params.height}x${req.params.width}.${req.params.fileType}`, {
										root: `${process.cwd()}`,
									})
								},
							)
						}
					})
			}
		})
	}

	monochrome(req: Request, res: Response) {
		fs.readFile(`./images/${req.params.imageName}`, (err, data) => {
			if (err) {
				res.status(404).send(err)
			} else {
				sharp(data)
					.grayscale()
					.toBuffer((err, buffer) => {
						if (err) {
							res.status(500).send(err)
						} else {
							fs.writeFile(`./images/${req.params.imageName}-monochrome.${req.params.fileType}`, buffer, (err) => {
								if (err) {
									res.status(500).send(err)
								}
								res.send('ok')
							})
						}
					})
			}
		})
	}
}

export default new ImageController()
