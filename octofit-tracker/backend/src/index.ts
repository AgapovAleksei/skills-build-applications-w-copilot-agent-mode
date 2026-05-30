import express from 'express'
import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit'
const PORT = Number(process.env.PORT ?? 8000)

const app = express()
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' })
})

app.get('/ready', (_req, res) => {
  res.json({ port: PORT, database: 'mongodb', url: MONGO_URI })
})

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`OctoFit backend running on http://localhost:${PORT}`)
      console.log(`Connected to MongoDB at ${MONGO_URI}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  })
