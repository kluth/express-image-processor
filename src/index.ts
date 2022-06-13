import express, { Application } from 'express'

import exampleRouter from './routes/example'
import imageRouter from './routes/image'

const app: Application = express()

/* ROUTES */
app.use('/example', exampleRouter)
app.use('/image', imageRouter)

/* LISTENING */
const PORT = 4000
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app
