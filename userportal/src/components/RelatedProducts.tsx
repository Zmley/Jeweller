import React, { useState, useEffect } from 'react'
import { getRelatedProducts } from '../api'
import { GridList, IconButton } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import GridListTile from '@material-ui/core/GridListTile'
import './RelatedProducts.scss'

const RelatedProduct: React.FC = (props: any, state: any) => {
  useEffect(() => {
    loadProducts()
  }, [])
  const [products, setProducts] = useState([])
  const loadProducts = async () => {
    const result = await getRelatedProducts()
    const { data } = result
    setProducts(data)
  }
  console.log(products)
  return (
    <div className='root'>
      <div className='titleBar'>
        RECOMENDATIONS, INTERESTING
        <IconButton color='primary' aria-label='add to shopping cart'>
          <ArrowForwardIcon />
        </IconButton>
      </div>
      <GridList className='gridList' cols={2.5}>
        {products.map(product => (
          <GridListTile key={product}>
            <img src='#' alt='' />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default RelatedProduct
