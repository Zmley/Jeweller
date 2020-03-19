import React, { useState, useEffect } from 'react'
import Chip from '@material-ui/core/Chip'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Slider from './Slider'
import { getCatalogues } from '../api'

const Header: React.FC = (props: any, state: any) => {
  const [catalogue, setCatalogue] = useState([])
  useEffect(() => {
    loadProducts()
  }, [])
  const loadProducts = async () => {
    const result = await getCatalogues()
    const { data } = result
    setCatalogue(data)
  }
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }
  return (
    <div>
      <div className='searchBar'>
        <Grid container spacing={1} alignItems='flex-end'>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id='input-with-icon-grid' label='With a grid' />
          </Grid>
          <Grid item>
            <img src='./assets/img/Cart.png'></img>
          </Grid>
        </Grid>
      </div>
      {catalogue.length > 0 &&
        catalogue.map((name: string) => (
          <Chip
            size='small'
            label={name}
            onClick={handleClick}
            clickable
            color='primary'
          />
        ))}
      <Slider></Slider>
    </div>
  )
}

export default Header
