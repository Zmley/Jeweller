import React, { useEffect, useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { createPayment } from 'api'

const Followed: React.FC = (props: any, state: any) => {
  const [paymentInfo, setPaymentInfo] = useState<any>()

  const getPaymentInfo = async () => {
    const result = await createPayment()
    console.log(result)
    setPaymentInfo(result)
  }
  if (paymentInfo === undefined) getPaymentInfo()
  useEffect(() => {
    console.log(paymentInfo)
  }, [paymentInfo])

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements || !paymentInfo) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const result = await stripe.confirmCardPayment(paymentInfo.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: 'Jenny Rosen'
        }
      }
    })

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message)
    } else {
      // The payment has been processed!
      if (result.paymentIntent!.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Card details</label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <button disabled={!stripe}>Confirm order</button>
      </form>
    </div>
  )
}

export default Followed
