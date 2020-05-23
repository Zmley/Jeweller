import React from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'

const Home: React.FC = (props: any, state: any) => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  )
}

export default Home
