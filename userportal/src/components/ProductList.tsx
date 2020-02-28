import React, { useState, useEffect } from 'react'
import { getProducts } from '../api'
import Card from '@material-ui/core/Card'

import {
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Avatar
} from '@material-ui/core'

import { Product } from 'models'
const ProductList: React.FC = (props: any, state: any) => {
  useEffect(() => {
    loadProducts()
  }, [])
  const [products, setProducts] = useState([])
  const loadProducts = async () => {
    const result = await getProducts()
    const { data } = result
    setProducts(data)
  }

  return (
    <div className='productList'>
      {products.length > 0 &&
        products.map((product: Product) => (
          <Card key={product.id}>
            <CardHeader
              avatar={<Avatar aria-label='recipe'>R</Avatar>}
              action={<IconButton aria-label='settings'></IconButton>}
              title={product.name}
              subheader='September 14, 2016'
            />
            <CardMedia
              image='/static/images/cards/paella.jpg'
              title='Paella dish'
            />
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'></IconButton>
              <IconButton aria-label='share'></IconButton>
            </CardActions>
          </Card>
        ))}
    </div>
  )
}

export default ProductList
