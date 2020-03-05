import React from 'react'
import './App.scss'
import TabBar from 'components/TabBar'
import { Switch, Route } from 'react-router-dom'
import Followed from './Followed'
import Home from './Home'
import Favourite from './Favourite'

const App: React.FC = (props: any, state: any) => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/followed'>
          <Followed />
        </Route>
        <Route path='/favourite'>
          <Favourite />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <footer>
        <TabBar />
      </footer>
    </div>
  )
}

export default App
