import { Pool } from 'pg'

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not defined in environment variables')
  process.exit(1)
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message)
  } else {
    console.log('✅ Database connected successfully!')
    console.log('📅 Database server time:', res.rows[0].now)
  }
})

export const db = {
  query: (text: string, params: unknown[]) => pool.query(text, params),
}
