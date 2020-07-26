import React, { useState } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Product } from '../models/index'
import './Gallery.scss'
import { Link } from 'react-router-dom'
import sample from '../assets/img/productSample.png'

export default function TitlebarGridList() {
  const localFavorites = localStorage.getItem('favorites')
  const [products, setProducts] = useState<Product[]>(
    localFavorites ? JSON.parse(localFavorites) : []
  )

  return (
    <div className='galleryBox'>
      <GridList cellHeight={116} className='gridList' cols={3}>
        {products.map(product => (
          <Link
            key={product.id}
            to={{
              pathname: `/product/${product.name}`,
              state: { product: product }
            }}
          >
            <GridListTile key={product.images[0]}>
              <img src={sample} alt={product.name} />
            </GridListTile>
          </Link>
        ))}
      </GridList>
    </div>
  )
}
