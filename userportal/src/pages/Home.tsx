import React, { useEffect } from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'
import { useAuth0 } from '../react-auth0-spa'
import { getProducts, setHeaderToken } from '../api'
import { useHistory } from 'react-router-dom'
import { Product } from 'models'
import './App.scss'

interface Props {
  handleChangeTitle: (title: string) => void
}
const Home = ({ handleChangeTitle }: Props, state: any) => {
  handleChangeTitle('SHOP')
  let history = useHistory()
  const { getTokenSilently, isAuthenticated } = useAuth0()

  useEffect(() => {
    loadProducts()
  }, [])
  const [products, setProducts] = React.useState([])
  const loadProducts = async () => {
    if (isAuthenticated) {
      const token = await getTokenSilently()
      setHeaderToken(token)
    }
    const result = await getProducts()
    setProducts(result)
  }
  const handleSearchByCatalogue = (catalogue: string) => {
    const productList = products.filter((product: Product) => {
      if (product.tags.find(tag => tag.includes(catalogue.toLowerCase()))) {
        return true
      }
      return false
    })
    return productList
  }
  const handleClickCatalogue = (catalogue: any) => {
    history.push({
      pathname: '/category',
      state: {
        catalogue: catalogue,
        products: handleSearchByCatalogue(catalogue.name)
      }
    })
    handleChangeTitle(catalogue.name)
  }
  return (
    <>
      <div className='main'>
        <Header
          handleChangeTitle={handleChangeTitle}
          handleClickCatalogue={handleClickCatalogue}
        />
        <ProductList products={products} />
      </div>
    </>
  )
}

export default Home
