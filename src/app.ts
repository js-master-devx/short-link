import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router } from './presentation/routes/index.routes'
import { errorHandler } from './presentation/middleware/errorMiddleware'



dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/v1', router)

app.get('', (_: Request, res: Response) => {
    res.status(200).json({ message: 'HELLO WORLD! SHORTEN LINK API 🤣' })
})

app.use(errorHandler)

app.use((_: Request, res: Response) => {
    res.status(404).json({ message: 'ROUTER NOT FOUND! SHORTEN LINK API 👺' })
})
app.listen(process.env.PORT, () => {
    console.log(`SHORTEN API IS RUNNING ON https://127.0.0.1:${process.env.PORT}🚀 `)
})

// mongoose.connect(process.env.MONGO_URI!).then(() => {
//     console.log('DB CONNECTED 💥')
// }).catch((error: any) => {
//     console.error('ERROR NOT CONNECTED TO DB' + error.message?.toString().toUpperCase())
// })