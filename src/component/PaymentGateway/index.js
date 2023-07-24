import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const PaymentGateway = () => {
  // State variables for managing form inputs
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [paymentOption, setPaymentOption] = useState('card');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Event handler for name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Event handler for card number input change
  const handleCardNumberChange = (event) => {
    const cardValue = event.target.value;

    // Allowing a maximum of 16 digits for card number
    if (cardValue.length <= 16) {
      setCardNumber(cardValue);
    }
  };

  // Event handler for expiry input change
  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  // Event handler for CVV input change
  const handleCVVChange = (event) => {
    const cvvValue = event.target.value;

    // Allowing a maximum of 3 digits for CVV
    if (cvvValue.length <= 3) {
      setCVV(cvvValue);
    }
  };

  // Event handler for payment option select change
  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  // Event handler for phone number input change
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (cardNumber && expiry && cvv) {
      if (paymentOption === 'card' && name) {
        alert('Card payment successful!');
      } else if (paymentOption !== 'card' && phoneNumber) {
        alert('Payment successful!');
      } else {
        alert('Please fill in all the fields.');
      }
    }
  };

  return (
    <div className='master-div'>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameOnCard">Name On Card</label>
          <input
            type="text"
            id="nameOnCard"
            placeholder="Precom"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="paymentOption">Payment Option</label>
          <select
            id="paymentOption"
            value={paymentOption}
            onChange={handlePaymentOptionChange}
          >
            <option value="card">Card</option>
            <option value="upi">UPI</option>
            <option value="paytm">Paytm</option>
          </select>
        </div>
        <br/>
        {paymentOption === 'card' && (
          <>
            <div>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                id="cardNumber"
                placeholder="0810**********15"
                value={cardNumber}
                maxLength={16}
                minLength={16}
                onChange={handleCardNumberChange}
              />
            </div>
            <br/>
            <div>
              <label htmlFor="expiry">Expiry (MM/YYYY)</label>
              <input
                type="month"
                id="expiry"
                placeholder="05/2024"
                value={expiry}
                onChange={handleExpiryChange}
              />
            </div>
            <br/>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                id="cvv"
                placeholder="***"
                value={cvv}
                maxLength={3}
                minLength={3}
                onChange={handleCVVChange}
              />
            </div>
            <br/>
          </>
        )}
        {paymentOption !== 'card' && (
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        )}
        <br/>
        <Link to={"/Products"}>
          <button type="submit">Pay Now</button>
        </Link>
      </form>
    </div>
  );
};

export default PaymentGateway;
