import React, { useState, useEffect } from 'react'
import './Header.scss'
import cart from '../assets/img/Cart.png'
import Chip from '@material-ui/core/Chip'
import {
  TextField,
  GridList,
  InputAdornment,
  IconButton
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Slider from './Slider'
import { getCatalogues } from '../api'
import { AccountCircle, Search } from '@material-ui/icons'
import { useAuth0 } from '../react-auth0-spa'

interface Props {
  handleChangeTitle: (title: string) => void
  handleClickCatalogue: (catalogue: any) => void
  handleSearching: (inputString: string) => void
}
const Header = (
  { handleChangeTitle, handleClickCatalogue, handleSearching }: Props,
  state: any
) => {
  const [catalogues, setCatalogues] = useState([])
  const [searchedInupt, setSearchedInupt] = useState('')
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  useEffect(() => {
    loadProducts()
  }, [])
  const loadProducts = async () => {
    const result = await getCatalogues()
    const { data } = result
    setCatalogues(data)
  }
  return (
    <div className='header'>
      <Grid spacing={1} container alignItems='flex-end' className='socialBar'>
        <Grid item xs={1}>
          <IconButton
            aria-label='account'
            size='small'
            onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
          >
            <AccountCircle fontSize='small' />
          </IconButton>
        </Grid>
        <Grid item className='inputField' xs={10}>
          <TextField
            id='input-with-icon-grid'
            variant='outlined'
            value={searchedInupt}
            onChange={e => {
              setSearchedInupt(e.target.value)
              handleSearching(e.target.value)
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search className='search' fontSize='small' />
                </InputAdornment>
              )
            }}
            fullWidth
            size='small'
            className='input'
          />
        </Grid>
        <Grid item className='cartbtn' xs={1}>
          <img src={cart} className='cart'></img>
        </Grid>
        <Grid item xs={12}>
          <GridList className='gridList'>
            {catalogues.length > 0 &&
              catalogues.map((catalogue: any, index: number) => (
                <Chip
                  key={index}
                  size='small'
                  label={catalogue.name}
                  onClick={() => handleClickCatalogue(catalogue)}
                  className='chip'
                  clickable
                />
              ))}
          </GridList>
        </Grid>
      </Grid>

      <Slider></Slider>
    </div>
  )
}

export default Header
