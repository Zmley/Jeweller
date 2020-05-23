const stripe = require('stripe')('sk_test_PV0TYTUy9I8IflPzMQdftgbh00WgSN0HkW')

export const makePayment = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'cad',
    description: 'My first payment'
  })

  return paymentIntent
}

export const confirmPayment = async (paymentIntentID: any) => {
  const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentID, {
    payment_method: 'pm_card_amex'
  })
  return paymentIntent
}
