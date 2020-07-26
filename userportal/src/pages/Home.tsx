import React from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'
import { useAuth0 } from '../react-auth0-spa'
import './App.scss'

const Home: React.FC = (props: any, state: any) => {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      <div className='main'>
        <Header />
        {isAuthenticated && <ProductList />}
      </div>
    </>
  )
}

export default Home
