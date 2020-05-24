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
