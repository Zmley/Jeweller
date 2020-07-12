import React, { useState } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Product } from '../models/index'
import './Gallery.scss'
import sample from '../assets/img/productSample.png'

interface Props {
  products: any
}
export default function TitlebarGridList({ products }: Props) {
  return (
    <div className='galleryBox'>
      <GridList cellHeight={116} className='gridList' cols={3}>
        {products.map((product: any) => (
          <GridListTile key={product.images[0]}>
            <img src={product.images[0]} alt={product.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
