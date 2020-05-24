import { Pool } from 'pg'
import { productStatus } from '../models'
const procedures: { [key: string]: string } = {
  productList: `SELECT "Product"."id", "name", "likeCount", (array_agg("username"))[1], "images", "price", "description",
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
                GROUP BY "Product"."id"
              `,
  productSizeList: `select "id","productID","size","width","price","length","height","color" from "ProductSize"`,
  catalogue: `SELECT "name"
              FROM "Catalogue"
            `,
  newAddress: `INSERT INTO "Address" ( "name", "address", "postcode", "phone") VALUES
              ($1,$2,$3,$4);`,
  likeProduct: `UPDATE "Product" SET "likeCount" =  (COALESCE("likeCount",'0')::int + 1) WHERE id = $1 RETURNING "id" as "productID", "likeCount";`,
  dislikeProduct: `UPDATE "Product" SET "likeCount" =  (COALESCE("likeCount",'0')::int - 1) WHERE id = $1 RETURNING "id" as "productID", "likeCount";`,
  getArtist: `Select "User"."id" as "id", "username", "role", "avatar", "User"."createdAt", "User"."lastUpdatedAt", "description", "backgroundImage"
              from "User"
              inner join "Artist" on "Artist"."id" = "User"."id"
              where "User"."id" = $1
              `,
  getArtistProducts: `SELECT "Product"."id", "name", "likeCount", (array_agg("username"))[1], "images", "price", "description", "status",
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
                WHERE ("status" = '${productStatus.SOLD}' or  "status" = '${productStatus.ENABLED}') and "User"."id" = $1
                GROUP BY "Product"."id" `
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
