import express, { Application } from 'express'

import imageRouter from './routes/image'

const app: Application = express()

/* ROUTES */
app.use('/image', imageRouter)

export default app
