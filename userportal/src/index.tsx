import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe('pk_test_PHzKfV7GtxhXs4UgA0eVQW9b00QntVmn0m')
ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Router>
      <App />
    </Router>
  </Elements>,
  document.getElementById('root')
)
