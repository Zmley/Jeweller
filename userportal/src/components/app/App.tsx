import React from 'react'
import logo from '../../logo.svg'
import './App.css'

const App: React.FC = (props: any, state: any) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img onClick={() => {}} src={logo} className='App-logo' alt='logo' />
        <p
          onClick={() => {
            console.log(props)
          }}
        >
          <code>src/App.tsx</code> and save to reload.
        </p>
        <p className='App-link' onClick={() => {}}>
          Learn React
        </p>
      </header>
    </div>
  )
}

export default App
