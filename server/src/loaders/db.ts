import { Pool } from 'pg'
import { productStatus } from '../models'
const procedures: { [key: string]: string } = {
  productList: `SELECT "name", "likeCount", "price", "username", "images"
                FROM "Product"
                LEFT JOIN "User"
                ON "Product"."userID" = "User"."id"
                WHERE "status" = '${productStatus.PUBLISHED}'
              `
}

const query = async (key: string, value: string[]) => {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
  })

  const query = procedures[key]
  const result = await pool.query(query, value)
  return { count: result.rowCount, data: result.rows }
}

export default query
