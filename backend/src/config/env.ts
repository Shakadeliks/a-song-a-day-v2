import dotenv from 'dotenv'
import path from 'path'

// Load environment variables - this file should be imported first
// Use explicit path to .env file in backend directory
dotenv.config({ path: path.join(__dirname, '../../.env') })
