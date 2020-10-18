import React, { useEffect, useState } from 'react'
import './App.scss'
import TabBar from 'components/TabBar'
import { Switch, Route } from 'react-router-dom'
import Followed from './Followed'
import Home from './Home'
import Favourite from './Favourite'
import TitleBar from 'components/TitleBar'
import Product from './Product'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '../react-auth0-spa'
import { setAuth } from '../api/auth'
import Cart from './Cart'
const App: React.FC = (props: any, state: any) => {
  let history = useHistory()
  const [networkReady, setNetworkReady] = useState(false)
  const { isInitializing, isAuthenticated, getTokenSilently } = useAuth0()
  useEffect(() => {
    const getSessionToken = async () => {
      if (!isInitializing && isAuthenticated) {
        try {
          const token = (await getTokenSilently()) as string
          setAuth(token)
          setNetworkReady(true)
        } catch (error) {
          console.log(error)
        }
      }
    }
    getSessionToken()
  }, [isAuthenticated, isInitializing, getTokenSilently])

  return (
    <>
      <TitleBar />
      <div style={{ paddingTop: '53px' }}>
        <Switch>
          <Route path='/product/:name' component={Product}></Route>
          <Route path='/followed'>
            <Followed />
          </Route>
          <Route path='/favourite'>
            <Favourite />
          </Route>
          <Route path='/cart' component={Cart} />
          <Route exact path='/' render={() => <Home />}></Route>
        </Switch>
        {(history.location.pathname === '/' ||
          history.location.pathname === '/followed' ||
          history.location.pathname === '/favourite') && (
          <footer>
            <TabBar />
          </footer>
        )}
      </div>
    </>
  )
}

export default App
