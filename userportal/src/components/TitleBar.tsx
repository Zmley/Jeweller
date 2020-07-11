import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/img/Cart.png'
import './TitleBar.scss'
import { useAuth0 } from '../react-auth0-spa'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button } from '@material-ui/core'

const Titlebar: React.FC = (props: any, state: any) => {
  return (
    <div className='titlebar'>
      {!(
        window.location.pathname === '/' ||
        window.location.pathname === '/followed' ||
        window.location.pathname === '/favourite'
      ) && (
        <Link to='/'>
          <ArrowBackIcon className='back' />
        </Link>
      )}
      <Button href='/'>SHOP</Button>
      {!(
        window.location.pathname === '/' ||
        window.location.pathname === '/followed' ||
        window.location.pathname === '/favourite'
      ) && (
        <Link to='/favourite'>
          <img src={cart} className='cart'></img>
        </Link>
      )}
    </div>
  )
}

export default Titlebar
