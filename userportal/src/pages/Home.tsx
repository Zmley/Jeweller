import React from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'
import { useAuth0 } from '../react-auth0-spa'
import { Button } from '@material-ui/core'

const Home: React.FC = (props: any, state: any) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  return (
    <>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect()}>Log in</Button>
      )}
      {isAuthenticated && (
        <div>
          <Header />
          <ProductList />
        </div>
      )}
    </>
  )
}

export default Home
