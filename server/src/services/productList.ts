import { Product, Selection } from '../models'
import query from '../services/db'

export const getProducts = async (products: Product[]) => {
  const productSizeList = await query('productSizeList', [])
  products.map((product: Product) => {
    product.tags = JSON.parse(product.tags as string)
    product.selections = productSizeList.data.filter(
      (productSize: Selection) => productSize.productID === product.id
    )
    product.tags = (product.tags as string[]).filter(
      (tag: string) => tag !== '-'
    )
  })

  return products
}
