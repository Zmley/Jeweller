import React, { useState, useEffect } from 'react'
import { getRelatedProducts } from '../api'
import { GridList, Grid, Typography, Button } from '@material-ui/core'
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
  return (
    <Grid container direction='column'>
      <Grid item className='titleBar'>
        <Typography variant='caption' component='span'>
          RECOMENDATIONS
        </Typography>
        <Button
          color='default'
          size='small'
          aria-label='add to shopping cart'
          endIcon={<ArrowForwardIcon />}
        >
          View All
        </Button>
      </Grid>
      <GridList className='gridList' cols={2.5}>
        {products.map(product => (
          <GridListTile key={product}>
            <img src='#' alt='' />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  )
}

export default RelatedProduct
