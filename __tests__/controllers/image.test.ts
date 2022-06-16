import request from 'supertest'
import { ImageController } from '../../src/controllers/image'
import app from '../../src/app'

jest.mock('../../src/controllers/image')

describe('Image Controller', () => {
	it('should call resize if resulting image not exists', async () => {
		const response = await request(app).get(
			`/image/profile.jpeg/resize/${Math.floor(Math.random() * (300 - 100 + 1)) + 100}/100/webp`,
		)
		expect(response.status).toBe(200)
		expect(ImageController.resize).toHaveBeenCalled()
	})
})
