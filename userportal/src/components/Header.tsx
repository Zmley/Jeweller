import React, { useState, useEffect } from 'react'
import './Header.scss'
import cart from '../assets/img/Cart.png'
import search from '../assets/img/search.png'
import Chip from '@material-ui/core/Chip'
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
    <div className='header'>
      <Grid container spacing={1} alignItems='flex-end' className='socialBar'>
        <Grid item>
          <img src={search} className='search'></img>
        </Grid>
        <Grid item className='inputField'>
          <TextField
            id='input-with-icon-grid'
            variant='outlined'
            fullWidth
            size='small'
            className='input'
          />
        </Grid>
        <Grid item className='cartbtn'>
          <img src={cart} className='cart'></img>
        </Grid>
      </Grid>
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
