import React from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'
import './App.scss'

const Home: React.FC = (props: any, state: any) => {
  return (
    <>
      <div className='main'>
        <Header />
        <ProductList />
      </div>
    </>
  )
}

export default Home
