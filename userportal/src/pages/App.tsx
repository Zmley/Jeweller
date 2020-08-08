import React from 'react'
import './App.scss'
import TabBar from 'components/TabBar'
import { Switch, Route } from 'react-router-dom'
import Followed from './Followed'
import Home from './Home'
import Favourite from './Favourite'
import TitleBar from 'components/TitleBar'
import Product from './Product'
import Category from './Category'
import { useHistory } from 'react-router-dom'

const App: React.FC = (props: any, state: any) => {
  let history = useHistory()
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
        <Route path='/followed'>
          <Followed />
        </Route>
        <Route path='/favourite'>
          <Favourite />
        </Route>
        <Route
          exact
          path='/'
          render={() => <Home handleChangeTitle={handleChangeTitle} />}
        ></Route>
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
