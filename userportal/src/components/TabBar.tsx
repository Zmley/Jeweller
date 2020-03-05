import React from 'react'
import { Link } from 'react-router-dom'
const TabBar: React.FC = (props: any, state: any) => {
  return (
    <div className='tabbar'>
      <Link to='/followed'>
        <div className='tab'>Followed</div>
      </Link>
      <Link to='/'>
        <div className='tab'>Logo</div>
      </Link>
      <Link to='/favourite'>
        <div className='tab'>Favourite</div>
      </Link>
    </div>
  )
}

export default TabBar
