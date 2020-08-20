import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_51HIGuLLGUGmws7dTNapxVjmb8muNFKIhMkuviOLZQKkK7oYBMrwj0SNHm2Y26w2YasETTbayFYcpiFXvVSvYYzhF00cWHffRUy';
  const onToken = token => {
    alert('Payment SuccessFul')
    console.log(token)
  }

  return(
    <StripeCheckout
      label= 'Pay now'
      name= 'UDJ Apparels Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description= {`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency='INR'
    />
  )
}

export default StripeCheckoutButton;