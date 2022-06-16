import { Request, Response } from 'express'
import * as fs from 'fs'
import sharp from 'sharp'

export class ImageController {
	resize(req: Request, res: Response) {
		const name = req.params.imageName.split('.')[0]
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
								`./images/${name}_${req.params.height}x${req.params.width}.${req.params.fileType}`,
								buffer,
								(err) => {
									if (err) {
										res.status(500).send(err)
									}
									res
										.status(200)
										.sendFile(`./images/${name}_${req.params.height}x${req.params.width}.${req.params.fileType}`, {
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
		const name = req.params.imageName.split('.')[0]
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
							fs.writeFile(`./images/${name}_monochrome.${req.params.fileType}`, buffer, (err) => {
								if (err) {
									res.status(500).send(err)
								}
								res.status(200).sendFile(`./images/${name}_monochrome.${req.params.fileType}`, {
									root: `${process.cwd()}`,
								})
							})
						}
					})
			}
		})
	}
}

export default new ImageController()
