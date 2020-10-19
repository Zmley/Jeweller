import React, { useEffect, useState } from 'react'
import './App.scss'
import TabBar from 'components/TabBar'
import { Switch, Route } from 'react-router-dom'
import Followed from './Followed'
import Home from './Home'
import Favourite from './Favourite'
import TitleBar from 'components/TitleBar'
import Product from './Product'

import Category from './Category'
import Address from './Address'
import Visa from './Visa'
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

  const [title, setTitle] = React.useState('SHOP')
  const handleChangeTitle = (title: string) => {
    setTitle(title)
  }
  return (
    <>
      <TitleBar title={title} />
      <Switch>
        <Route path='/product/:name' component={Product}></Route>
        <Route path='/category' component={Category}></Route>
        <Route path='/address' component={Address}></Route>
        <Route path='/checkout' component={Visa}></Route>
        <Route path='/followed'>
          <Followed />
        </Route>
        <Route path='/favourite'>
          <Favourite />
        </Route>
        <Route path='/cart' component={Cart} />
        <Route
          exact
          path='/'
          render={() => <Home handleChangeTitle={handleChangeTitle} />}
        ></Route>
      </Switch>
      {(history.location.pathname === '/' ||
        history.location.pathname === '/followed' ||
        history.location.pathname === '/favourite') && <TabBar />}
    </>
  )
}

export default App
