// IMPORTANT: Load environment variables first
import './config/env'

import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { db as _db } from './config/database'
import { errorHandler } from './middleware/ErrorHandler'
import routes from './routes'
void _db

const app: Application = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet()) // Security headers
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
)
app.use(morgan('dev')) // Logging
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.use('/api', routes)

// Error handling (must be last)
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📝 Environment: ${process.env.NODE_ENV}`)
})

export default app
