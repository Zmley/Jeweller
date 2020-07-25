import React, { useState, useEffect } from 'react'
import { getProducts } from '../api'
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
import { useAuth0 } from '../react-auth0-spa'

const ProductList: React.FC = (props: any, state: any) => {
  const { getTokenSilently } = useAuth0()
  console.log('Test')
  useEffect(() => {
    loadProducts()
  }, [])
  const [products, setProducts] = useState([])
  const [liked, setLiked] = useState(false)
  const loadProducts = async () => {
    const token = await getTokenSilently()
    console.log(token)
    const result = await getProducts(token)
    setProducts(result)
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
                      onClick={() => setLiked(false)}
                    >
                      <Favorite className='like' />
                    </IconButton>
                  ) : (
                    <IconButton
                      className='button'
                      onClick={() => setLiked(true)}
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
