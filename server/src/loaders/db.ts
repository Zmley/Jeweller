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
    port: Number(process.env.DB_PORT),
    ssl: {
      rejectUnauthorized: false,
      ca: `-----BEGIN CERTIFICATE-----
MIIEMDCCApigAwIBAgIDZFcSMA0GCSqGSIb3DQEBDAUAMDoxODA2BgNVBAMML2Zj
ZWI3YjcyLWY4M2MtNGYyZC1iYWQwLTNiOGFhYWUzODU5ZiBQcm9qZWN0IENBMB4X
DTE5MTIyMzIwMDkzNloXDTI5MTIyMDIwMDkzNlowOjE4MDYGA1UEAwwvZmNlYjdi
NzItZjgzYy00ZjJkLWJhZDAtM2I4YWFhZTM4NTlmIFByb2plY3QgQ0EwggGiMA0G
CSqGSIb3DQEBAQUAA4IBjwAwggGKAoIBgQC9bb6KohgVefKPiqenWHvA+YigmsVv
y6CAAyQjRmGDM4ZWggXXE3kkyvCdZwT0bFJ6ps67jad1p0PmLp19ZG/LiDSqxucX
YZRZEpKQXnYVcGBiCzXQ7SWWEVgV8h4xn4peRJmU1dIGrQtVuEPr7xIHL0qjvFtw
gqHgg9IbsU6WN5yQ2aa6jSoI8rPHotaouiKF6OYBpnEed0RAIsJtc8wmsS21KgAC
lkXtXxwdUnu/7ihr7XnyKqFya2XmNa6FoSL2odiH2asMV8h/KmXpRG6AiR6IfGd/
B7eG2Js99xzTxxJZuMKek6dN6tz4cW7MHNzsFA+00UmKNjENvLrPQtwekkSxwX2e
RqrCqDa1oAGdSaytbMURdfmIpM2HWlY5BXk5HWrPl7yUZkVF99PQvgg6LVjWwXxN
uI58LjDKQvOxthb0rFrCr1YGxrUlHcXlMeu0lMr83S7HKhmLqKPbJei88YriLBby
FGgPXEDvHSBXOv1Ae/D0fUl9xL5IWiWOGVcCAwEAAaM/MD0wHQYDVR0OBBYEFAlQ
W4k+NlJ9PCKURAdIbMowlQyYMA8GA1UdEwQIMAYBAf8CAQAwCwYDVR0PBAQDAgEG
MA0GCSqGSIb3DQEBDAUAA4IBgQAH1rp/1XjVbWf5jNid9VVytaF6fhy+6dKt4aay
8m+M23lFPhAdWWI9WXcp6xHnUajOjq2kd++0z0viIZbUiPLIDpXUgo+Y3QJBdtE6
3Eci4f857i42VPuB3Dc0VIXrga13/DpsLzhIp+Ss+JC2PBlZC0t5iz7ggUOOpzSZ
9abmqyby2nxvRMERG3iAPu56wpe3K1BzVRSqGvnjut/08KSDGj8PK45tQlaKJFT+
CscJeQV/N6Md6d8lWNepzMKcT05AB+fe7YAb3q2NV2iLzyC/XHicfEFrDxs6cNZT
Ol1IynYjqBD+pi/6OLyqPn5uyPESEnvMAslP+TuE0UUG8oI9znMrhMeOIqKWy5C1
HI2qZrx5DPlEgkVh7ExlaIvHpNYHKjHrs+e98g/UrSVG4eCFLy01mRMEBZ5mF0JZ
zplCgO2zg1BLBnK75U5WqqZgilKv55mXrxsTgXGeRffrIqXLHOj7kXeWMFQ5hlrn
TDfuABJG/uEdNUtk0VifcsAt9Tw=
-----END CERTIFICATE-----
`
    }
  })

  const query = procedures[key]
  const result = await pool.query(query, value)
  return { count: result.rowCount, data: result.rows }
}

export default query
