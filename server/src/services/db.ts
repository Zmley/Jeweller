import { Pool } from 'pg'
import { productStatus } from '../models'
const procedures: { [key: string]: string } = {
  productList: `SELECT "Product"."id", "name", "User"."id" as "artistID", "likeCount", "price",  (array_agg("username"))[1] as "artistName", "images",
                concat('["',
                (array_agg("Tags"."mainTag"))[1] ,'-',(array_agg("Tags"."subTag"))[1],'","',
                (array_agg("Tags"."mainTag"))[2] ,'-',(array_agg("Tags"."subTag"))[2],'","',
                (array_agg("Tags"."mainTag"))[3] ,'-',(array_agg("Tags"."subTag"))[3]
                ,'"]') as "tags"
                FROM "Product"
                LEFT JOIN "User"
                ON "Product"."userID" = "User"."id"
                LEFT JOIN "Tags"
                ON "Product"."tag1" = "Tags"."id" OR "Product"."tag2" = "Tags"."id" OR "Product"."tag3" = "Tags"."id"
                WHERE "status" = '${productStatus.ENABLED}'
                GROUP BY "Product"."id", "User"."id"
              `,
  getArtist: `select * from "User" where "id" = $1`,
  catalogue: `SELECT "name"
              FROM "Catalogue"
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
