import { Request, Response, NextFunction } from 'express'

interface ErrorResponse {
  success: false
  error: {
    code: string
    message: string
    details?: any
  }
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err)

  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  const response: ErrorResponse = {
    success: false,
    error: {
      code: err.code || 'INTERNAL_ERROR',
      message,
      ...(process.env.NODE_ENV === 'development' && { details: err.stack })
    }
  }

  res.status(statusCode).json(response)
}