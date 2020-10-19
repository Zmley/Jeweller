import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/img/Cart.png'
import './TitleBar.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button, IconButton, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

interface Props {
  title: string
}

const Titlebar = ({ title }: Props, state: any) => {
  let history = useHistory()

  return (
    <>
      <div style={{ height: 40 }}></div>
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
        <Typography className='title'>{title}</Typography>
        {!(
          window.location.pathname === '/' ||
          window.location.pathname === '/followed' ||
          window.location.pathname === '/favourite'
        ) && (
          <IconButton href='/cart'>
            <img src={cart} className='cart'></img>
          </IconButton>
        )}
      </header>
    </>
  )
}

export default Titlebar
