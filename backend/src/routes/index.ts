import { Router } from 'express'
// import authRoutes from './authRoutes'
// import userRoutes from './userRoutes'
// import songRoutes from './songRoutes'

const router = Router()

// TODO: Uncomment as routes are created
// router.use('/auth', authRoutes)
// router.use('/user', userRoutes)
// router.use('/songs', songRoutes)

// Placeholder route
router.get('/', (req, res) => {
  res.json({
    message: 'A Song a Day API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/api/auth',
      songs: '/api/songs',
      user: '/api/user',
    },
  })
})

export default router
