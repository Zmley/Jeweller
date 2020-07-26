import React from 'react'
import './App.scss'
import TabBar from 'components/TabBar'
import { Switch, Route } from 'react-router-dom'
import Followed from './Followed'
import Home from './Home'
import Favourite from './Favourite'
import TitleBar from 'components/TitleBar'
import Product from './Product'
import { useHistory } from 'react-router-dom'

const App: React.FC = (props: any, state: any) => {
  let history = useHistory()
  return (
    <>
      <TitleBar />
      <Switch>
        <Route path='/product/:name' component={Product}></Route>
        <Route path='/followed'>
          <Followed />
        </Route>
        <Route path='/favourite'>
          <Favourite />
        </Route>
        <Route exact path='/' render={() => <Home />}></Route>
      </Switch>
      {(history.location.pathname === '/' ||
        history.location.pathname === '/followed' ||
        history.location.pathname === '/favourite') && (
        <footer>
          <TabBar />
        </footer>
      )}
    </>
  )
}

export default App
