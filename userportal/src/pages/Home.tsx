import React, { useEffect, useState } from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'
import { useAuth0 } from '../react-auth0-spa'
import './App.scss'
import { getProducts } from '../api'
const Home: React.FC = (props: any, state: any) => {
  const { isAuthenticated } = useAuth0()
  useEffect(() => {
    loadProducts()
  }, [])
  const [products, setProducts] = useState<any[]>([])

  const loadProducts = async () => {
    const result = (await getProducts()).data
    setProducts(result)
  }
  return (
    <>
      <div className='main'>
        <Header />
        {products.length > 0 && <ProductList products={products} />}
      </div>
    </>
  )
}

export default Home
