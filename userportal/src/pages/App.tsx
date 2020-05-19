import React from 'react'
import './App.scss'
import TabBar from 'components/TabBar'
import TitleBar from 'components/TitleBar'
import { Switch, Route } from 'react-router-dom'
import Followed from './Followed'
import Home from './Home'
import Favourite from './Favourite'
import Product from './Product'

const App: React.FC = (props: any, state: any) => {
  return (
    <Switch>
      <div className='App'>
        <TitleBar />
        <Route path='/product/:name' component={Product}></Route>
      </div>
      <div className='App'>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/followed'>
          <Followed />
        </Route>
        <Route path='/favourite'>
          <Favourite />
        </Route>
        <footer>
          <TabBar />
        </footer>
      </div>
    </Switch>
  )
}

export default App
