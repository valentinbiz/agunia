import { useState } from 'react';

import { selectCartTotal } from '../../Store/Cart/CartSelector';
import { selectCurrentUser } from '../../Store/User/UserSelector';

import { useSelector } from 'react-redux';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE } from '../Button/Button.Component';

import { PaymentFormContainer, FormContainer } from "../../Components/PaymentForm/PaymentForm.Styles";


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements(); 
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100}),
    }).then(res => res.json());

    const {paymentIntent: {client_secret}} = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method:{
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    });

    setIsProcessingPayment(false)

    if(paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('payment Succsessful')
      }
    }

  }
  return (
    <PaymentFormContainer>
    <FormContainer onSubmit={paymentHandler}>
    <h2> Credit Card Payment: </h2>
      <CardElement />
      <Button disabled={isProcessingPayment} buttonType={BUTTON_TYPE.inverted}> Pay Now </Button>
    </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;