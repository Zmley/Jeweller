export type Product = {
  amount: number
  createdAt: string
  description: string
  id: string
  images: string[]
  lastUpdatedAt: string
  likeCount: number
  name: string
  price: number
  status: string
  userID: string
  username: string
  size: string
  artistName: string
  artistID: string
}
export type User = {
  username: string
  role: string
  avartar: string
  id: string
}
