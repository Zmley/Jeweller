import React, { useState, useEffect } from 'react'
import './Header.scss'
import cart from '../assets/img/Cart.png'
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import { getCatalogues } from '../api'
import { PersonOutline, Search } from '@material-ui/icons'
import { useAuth0 } from '../react-auth0-spa'

interface Props {
  handleChangeTitle: (title: string) => void
  setSelectedTitle: (title: string) => void
  selectedTitle: string
  handleSearching: (inputString: string) => void
}

const Header = (
  {
    handleChangeTitle,
    setSelectedTitle,
    selectedTitle,
    handleSearching
  }: Props,
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
            style={{ padding: 0 }}
            onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
          >
            <PersonOutline />
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
          <IconButton href='/cart' size='small'>
            <img src={cart} className='cart'></img>
          </IconButton>
        </Grid>
        <Grid item xs={12} container spacing={3}>
          <Grid xs={4} item>
            <Button
              style={{
                textAlign: 'center',
                fontWeight: selectedTitle === 'home' ? 'bold' : 'normal'
              }}
              onClick={() => setSelectedTitle('home')}
            >
              HOMEPAGE
            </Button>
          </Grid>
          <Grid xs={4} item>
            <Button
              style={{
                textAlign: 'center',
                fontWeight: selectedTitle === 'catalogue' ? 'bold' : 'normal'
              }}
              onClick={() => {
                setSelectedTitle('catalogue')
              }}
            >
              CATALOGUE
            </Button>
          </Grid>
          <Grid xs={4} item>
            <Button
              style={{
                textAlign: 'center',
                fontWeight: selectedTitle === 'artists' ? 'bold' : 'normal'
              }}
              onClick={() => setSelectedTitle('artists')}
            >
              ARTISTS
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
