import React, { useState, useEffect } from 'react'
import { getProducts } from '../api'

import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import {
  Typography,
  CardMedia,
  CardContent,
  IconButton,
  Grid
} from '@material-ui/core'
import { FavoriteBorder, Favorite } from '@material-ui/icons'
import productSample from '../assets/img/productSample.png'
import './productList.scss'
import { Product } from 'models'

const ProductList = (props: any, state: any) => {
  const { products } = props
  const [liked, setLiked] = useState(false)

  const handleLikeLocal = (selectedProduct: Product, like: boolean) => {
    const localFavoriteString = localStorage.getItem('favorites')
    let localFavorite
    if (localFavoriteString) {
      localFavorite = JSON.parse(localFavoriteString)
    } else {
      localFavorite = []
    }
    if (like) {
      localFavorite.push(selectedProduct)
      localStorage.setItem('favorites', JSON.stringify(localFavorite))
    } else {
      const removeUnlike = localFavorite.filter(
        (product: Product) => product.id !== selectedProduct.id
      )
      localStorage.setItem('favorites', JSON.stringify(removeUnlike))
    }
    setLiked(like)
  }
  return (
    <Grid className='productList' container spacing={2}>
      {products.length > 0 &&
        products.map((product: Product, index: number) => (
          <Grid item xs={6}>
            <Card
              key={product.id}
              style={{ margin: 'auto', border: 'none', boxShadow: 'none' }}
            >
              <Link
                key={product.id}
                to={{
                  pathname: `/product/${product.id}`,
                  state: { product: product }
                }}
              >
                <CardMedia
                  image={
                    product.images.find((image: any) => image.priority === 0)
                      ?.url
                  }
                  title='Paella dish'
                  className='image'
                />
              </Link>
              <CardContent className='content'>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  align='left'
                  className='productName'
                >
                  {product.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  align='left'
                  className='userName'
                >
                  {product.artistName}
                </Typography>
                <div className='likeDislike'>
                  {/* This part is a future item, hasn't been implemented since we dont have favourite data yet. */}
                  {liked ? (
                    <IconButton
                      className='button'
                      onClick={() => handleLikeLocal(product, false)}
                    >
                      <Favorite className='like' />
                    </IconButton>
                  ) : (
                    <IconButton
                      className='button'
                      onClick={() => handleLikeLocal(product, true)}
                    >
                      <FavoriteBorder className='like' />
                    </IconButton>
                  )}
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    align='left'
                    className='count'
                  >
                    {product.likeCount}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

export default ProductList
