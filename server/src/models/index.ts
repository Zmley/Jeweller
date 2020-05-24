export enum productStatus {
  PUBLISHED = 'PUBLISHED',
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  SOLD = 'SOLD'
}

export interface Address {
  name: string
  phone: string
  postcode: string
  address: string
}

export interface Product {
  id: string
  name: string
  likeCount: number
  images: string[]
  price: number
  description: string
  artistID: string
  artistName: string
  tags: string | string[]
  selections: Selection[]
}

export interface Selection {
  id: string
  productID: string
  size: string
  width: number
  price: number
  length: number
  height: number
  color: string
}
