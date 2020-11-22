import React, { useState, useEffect } from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'
import { useAuth0 } from '../../react-auth0-spa'
import { getProducts } from '../../api'
import { useHistory } from 'react-router-dom'
import { Product } from 'models'
import Slider from 'components/Slider'
import '../App.scss'
import { images, catalogues } from './constant'
import { Grid } from '@material-ui/core'
import ArtistList from './Artist'

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
  const [searchedProducts, setSearchedProducts] = React.useState([])
  const [isSearching, setIsSearching] = React.useState(false)
  const [selectedTitle, setSelectedTitle] = useState('home')
  const loadProducts = async () => {
    const result = (await getProducts()).data
    setProducts(result.data)
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
  const handleSearch = (inputString: string) => {
    if (inputString) {
      setIsSearching(true)
      const productsBase = products.filter((product: Product) =>
        product.name.includes(inputString)
      )
      setSearchedProducts(productsBase)
    } else {
      setIsSearching(false)
    }
  }
  return (
    <>
      <div className='main'>
        <Header
          handleChangeTitle={handleChangeTitle}
          handleSearching={handleSearch}
          selectedTitle={selectedTitle}
          setSelectedTitle={setSelectedTitle}
        />

        {selectedTitle === 'home' && (
          <>
            <Slider images={images}></Slider>
            <ProductList products={isSearching ? searchedProducts : products} />
          </>
        )}
        {selectedTitle === 'catalogue' && (
          <Grid container spacing={2} style={{ padding: 16 }}>
            {catalogues.map((catalogue: any) => (
              <Grid item xs={6} style={{ height: 80, marginBottom: '16px' }}>
                <div
                  style={{
                    backgroundColor: '#E5E5E5',
                    lineHeight: '80px',
                    paddingLeft: 8
                  }}
                >
                  {catalogue.label}
                </div>
              </Grid>
            ))}
          </Grid>
        )}
        {selectedTitle === 'artists' && <ArtistList />}
      </div>
    </>
  )
}

export default Home
