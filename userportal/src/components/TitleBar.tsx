import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/img/Cart.png'
import './TitleBar.scss'
import { useAuth0 } from '../react-auth0-spa'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const Titlebar: React.FC = (props: any, state: any) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  return (
    <div className='titlebar'>
      {window.location.pathname === '/' ||
        window.location.pathname === '/followed' ||
        (window.location.pathname === '/favourite' && (
          <Link to='/'>
            <ArrowBackIcon className='back' />
          </Link>
        ))}

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {window.location.pathname === '/' ||
        window.location.pathname === '/followed' ||
        (window.location.pathname === '/favourite' && (
          <Link to='/favourite'>
            <img src={cart} className='cart'></img>
          </Link>
        ))}
    </div>
  )
}

export default Titlebar