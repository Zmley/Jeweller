import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/img/Cart.png'
import './TitleBar.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Titlebar: React.FC = (props: any, state: any) => {
  let history = useHistory()
  return (
    <header className='titlebar'>
      {!(
        window.location.pathname === '/' ||
        window.location.pathname === '/followed' ||
        window.location.pathname === '/favourite'
      ) && (
        <IconButton onClick={() => history.goBack()} className='back'>
          <ArrowBackIcon />
        </IconButton>
      )}
      <Button href='/' className='title'>
        SHOP
      </Button>
      {!(
        window.location.pathname === '/' ||
        window.location.pathname === '/followed' ||
        window.location.pathname === '/favourite'
      ) && (
        <Link to='/favourite'>
          <img src={cart} className='cart'></img>
        </Link>
      )}
    </header>
  )
}

export default Titlebar
