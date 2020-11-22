export type Product = {
  amount: number
  createdAt: string
  description: string
  id: string
  images: any
  lastUpdatedAt: string
  selections: any[]
  likeCount: number
  name: string
  tags: any[]
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

export interface Arist {
  avatar: string
  backgroundImage: string
  followerCount: string
  followers: any[]
  id: string
  lastUpdatedAt: string
  likeCount: string
  productCount: string
  products: any[]
  username: string
  description: string
}
