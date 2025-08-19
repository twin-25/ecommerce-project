import { CheckoutHeader } from './CheckoutHeader';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './CheckoutPage.css';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart, loadCart }) {
  console.log(cart)
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {
      setDeliveryOptions(response.data);
    })
    axios.get('api/payment-summary').then((response) => {
      setPaymentSummary(response.data)
    })
  }, [cart])
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart={cart}/>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div >
    </>

  );

}