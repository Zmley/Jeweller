import React from 'react'
import logo from '../../logo.svg'
import './App.css'
import { sampleAction, sampleAction2 } from 'actions/simpleAction'
import { connect } from 'react-redux'
const App: React.FC = (props: any, state: any) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          onClick={() => {
            console.log(props.sampleAction())
          }}
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p
          onClick={() => {
            console.log(props)
          }}
        >
          {props.sampleReducer.sample} <code>src/App.tsx</code> and save to
          reload.
        </p>
        <p
          className='App-link'
          onClick={() => {
            console.log(props.sampleAction2())
          }}
        >
          Learn React
        </p>
      </header>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  ...state
})
const mapDispatchToProps = (dispatch: any) => ({
  sampleAction: () => dispatch(sampleAction('test')),
  sampleAction2: () => dispatch(sampleAction2('test'))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
