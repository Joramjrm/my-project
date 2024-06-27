import React from 'react';
import { Link } from 'react-router-dom';

const Payments = () => {
  return (
    <div>
      <main>
        <h1>Payments</h1>
        <form>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" />
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input type="text" id="expirationDate" name="expirationDate" />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" />
          <button type="submit">Make Payment</button>
        </form>
        <p>Or, pay with:</p>
        <ul>
          <li><Link to="/payments/paypal">PayPal</Link></li>
          <li><Link to="/payments/stripe">Stripe</Link></li>
          <li><Link to="/payments/apple-pay">Apple Pay</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default Payments;