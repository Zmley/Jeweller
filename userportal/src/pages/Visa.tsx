import React, { useEffect, useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { createPayment } from 'api'
import CustomTextField from '../components/TextField'
import { Card, IconButton, Grid, Divider } from '@material-ui/core'
import ArrowRightAltRounded from '@material-ui/icons/ArrowRightAltRounded'
import './Visa.scss'

const Visa: React.FC = (props: any, state: any) => {
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
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} className='input'>
          <Card className='card'>
            <div className='cardHeader'></div>
            <Divider />
            <div className='cardContent'>
              <Grid container>
                <Grid item xs={12} className='input'>
                  <CustomTextField
                    id='cardNumber'
                    label='Card Number'
                    defaultValue=''
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} className='input'>
                  <CustomTextField
                    id='holderName'
                    label='Holder Name'
                    defaultValue=''
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} className='input'>
                  <CustomTextField
                    id='expired'
                    label='Ex. Date'
                    defaultValue=''
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} className='input'>
                  <CustomTextField
                    id='cvv'
                    label='CVV'
                    defaultValue=''
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} className='btnField'>
          <IconButton
            aria-label='submmit'
            className='btn'
            type='submit'
            value='Submit'
          >
            <ArrowRightAltRounded fontSize='large' className='submitIcon' />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default Visa
