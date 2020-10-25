import express from 'express'
import connectDB from './config/db'
import dealerRouter from './routes/dealers'

connectDB()

const app = express()

app.use(express.json())

app.use('/v1/api/dealers', dealerRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
