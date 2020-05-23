import React from 'react'
import './App.scss'
import TabBar from 'components/TabBar'
import { Switch, Route } from 'react-router-dom'
import Followed from './Followed'
import Home from './Home'
import Favourite from './Favourite'
import TitleBar from 'components/TitleBar'
import Product from './Product'

const App: React.FC = (props: any, state: any) => {
  return (
    <Switch>
      <Route path='/product/:name' component={Product}></Route>
      <div className='App'>
        <Route path='/followed'>
          <Followed />
        </Route>
        <Route path='/favourite'>
          <Favourite />
        </Route>
        <Route exact path='/' render={() => <Home />}></Route>
        <footer>
          <TabBar />
        </footer>
      </div>
    </Switch>
  )
}

export default App
