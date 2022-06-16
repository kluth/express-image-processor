import app from '../../src/app'
import request from 'supertest'

describe('Image Route', () => {
	it("should return a 404 status code for the resize route if source image doesn't exist", async () => {
		const response = await request(app).get('/image/doesntexist/resize/100/100/png')
		expect(response.status).toBe(404)
	})

	it("should return a 404 status code for the monochrome route if source image doesn't exist", async () => {
		const response = await request(app).get('/image/doesntexist/monochrome/png')
		expect(response.status).toBe(404)
	})

	it('should return a 200 status code for the resize route if source image exists', async () => {
		const response = await request(app).get('/image/profile.jpeg/resize/100/100/webp')
		expect(response.status).toBe(200)
	})

	it('should return a 200 status code for the monochrome route if source image exists', async () => {
		const response = await request(app).get('/image/profile.jpeg/monochrome/png')
		expect(response.status).toBe(200)
	})
})
