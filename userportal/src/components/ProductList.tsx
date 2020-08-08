import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import {
  Typography,
  CardMedia,
  CardContent,
  IconButton
} from '@material-ui/core'
import { FavoriteBorder, Favorite } from '@material-ui/icons'
import productSample from '../assets/img/productSample.png'
import './productList.scss'
import { Product } from 'models'

const ProductList = ({ products }: any, state: any) => {
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
    <div className='productList'>
      {products.length > 0 &&
        products.map((product: Product, index: number) => (
          <Link
            key={product.id}
            to={{
              pathname: `/product/${product.name}`,
              state: { product: product }
            }}
          >
            <Card
              key={product.id}
              className={
                index % 2 === 0 ? 'productCardLeft' : 'productCardRight'
              }
            >
              <CardMedia
                image={productSample}
                title='Paella dish'
                className='image'
              />
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
                  {product.username}
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
          </Link>
        ))}
    </div>
  )
}

export default ProductList
