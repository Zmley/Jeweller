import React, { useState, useEffect } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Product } from '../models/index'
import './Gallery.scss'
import sample from '../assets/img/productSample.png'

export default function TitlebarGridList() {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <div className='galleryBox'>
      <GridList cellHeight={116} className='gridList' cols={3}>
        {products.map(product => (
          <GridListTile key={product.images[0]}>
            <img src={product.images[0]} alt={product.name} />
          </GridListTile>
        ))}
        <GridListTile key={sample}>
          <img src={sample} />
        </GridListTile>
        <GridListTile key={sample}>
          <img src={sample} />
        </GridListTile>
        <GridListTile key={sample}>
          <img src={sample} />
        </GridListTile>
        <GridListTile key={sample}>
          <img src={sample} />
        </GridListTile>
        <GridListTile key={sample}>
          <img src={sample} />
        </GridListTile>
        <GridListTile key={sample}>
          <img src={sample} />
        </GridListTile>
      </GridList>
    </div>
  )
}
