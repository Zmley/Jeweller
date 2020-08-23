import { Pool } from 'pg'
import { productStatus } from '../models'
const procedures: { [key: string]: string } = {
  productList: `SELECT "Product"."id", "name", "likeCount", "images", "description", "User"."id" as "artistID", (array_agg("username"))[1] as "artistName",
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
  offShelfProduct: `Update "Product" set status = 'SOLD' where id = $1 and "userID" = $2`,
  productSizeList: `select "id","productID","size","width","price"::float,"length","height","color","imageURL" from "ProductSize"`,
  catalogue: `SELECT "Catalogue".id, "Catalogue".name, json_agg(row(cata.name,cata.id)::category)
              FROM "Catalogue"
              left join "Catalogue" as cata on cata.father = "Catalogue".name
              where "Catalogue".level = 1
              group by "Catalogue".name, "Catalogue".id
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
  getArtistProducts: `SELECT "Product"."id", "name", "likeCount", (array_agg("username"))[1] as "artistName", "images", "description", "status",
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
                GROUP BY "Product"."id" `,
  follow: `INSERT INTO "Follow" ( "userID", "artistID") VALUES ($1,$2);`,
  unfollow: `DELETE from "Follow" where "userID" = $1 and "artistID" = $2`,
  getUnreadEvents: `select "Events".id, "Product".images, "artistID", "Product".id, "Artist".avatar, "Artist".username as "productID"
              from "Follow"
              inner join "User" on sub = $1 and "Follow"."userID" = "User".id
              inner join "Product" on "artistID" = "Product"."userID"
              inner join "Events" on "Product".id = "Events"."productID" and "User"."lastUpdatedAt" <= "Events"."createdAt"
              inner join "User" as "Artist" on  "artistID" = "Artist".id`,
  readall: `Update "User" set "lastUpdatedAt" = CURRENT_TIMESTAMP where sub = $1`,
  addToCart: `INSERT INTO "ShoppingCart" ("id", "productID", "amount", "userID") VALUES ($1, $2, $3, $4)`,
  removeFromCart: `Delete from "ShoppingCart" using "User" where "ShoppingCart".id = $1 and "User".sub = $2 and "User".sub = "ShoppingCart"."userID"`,
  updateCart: `Update "ShoppingCart" set amount = $3 from "User" where "ShoppingCart".id = $1 and "User".sub = $2 and "User".sub = "ShoppingCart"."userID"`,
  addToFavourite: `INSERT INTO "Favourite" ("id", "productID", "userID") VALUES ($1, $2, $3)`,
  removeFromFavourite: `Delete from "Favourite" using "User" where "Favourite"."productID" = $1 and "User".sub = $2 and "User".sub = "Favourite"."userID"`,
  getFavourite: `Select "Product"."id", "name", "likeCount", "images", "description",
                concat('["',
                (array_agg("Tags"."mainTag"))[1] ,'-',(array_agg("Tags"."subTag"))[1],'","',
                (array_agg("Tags"."mainTag"))[2] ,'-',(array_agg("Tags"."subTag"))[2],'","',
                (array_agg("Tags"."mainTag"))[3] ,'-',(array_agg("Tags"."subTag"))[3]
                ,'"]') as "tags"
                from "Favourite", "Product", "Tags"
                where
                "Favourite"."userID" = $1
                and
                "Product".id = "Favourite"."productID"
                and
                ("Product"."tag1" = "Tags"."id" OR "Product"."tag2" = "Tags"."id" OR "Product"."tag3" = "Tags"."id")
                GROUP BY "Product"."id"
                `,
  artistInfo: `INSERT INTO "Artist" ("id", "description", "backgroundImageURL") VALUES ($1, $2, $3) ON CONFLICT DO Update set description = $2, "backgroundImageURL" = $3`,
  login: `INSERT INTO "User"(role, sub) VALUES($1, $2) ON CONFLICT DO NOTHING`
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
