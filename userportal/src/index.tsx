import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { Router } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Auth0Provider } from './react-auth0-spa'
import history from './utils/history'
const stripePromise = loadStripe('pk_test_PHzKfV7GtxhXs4UgA0eVQW9b00QntVmn0m')

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}
ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      client_id={process.env.REACT_APP_CLIENTED}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <App />
      </Router>
    </Auth0Provider>
  </Elements>,
  document.getElementById('root')
)
