import React from 'react'
import { Link } from 'react-router-dom'
import './TabBar.scss'
import logo from '../assets/img/LOGO@2x.png'

const TabBar: React.FC = (props: any, state: any) => {
  return (
    <div className='tabbar'>
      <Link to='/followed'>
        <div className='tab'>Followed</div>
      </Link>
      <Link to='/'>
        <img className='logo' src={logo}></img>
      </Link>
      <Link to='/favourite'>
        <div className='tab'>Favourite</div>
      </Link>
    </div>
  )
}

export default TabBar
