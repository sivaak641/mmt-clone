import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="left">
        <h2 className='title'>Fare Summary</h2>
        <div className="fare-container">
          <div className="base-fare">Base Fare</div>
          <div className="fee-surcharges">Fee & Surcharges</div>
          <div className="total">Total</div>
        </div>
      </div>
      <div className="right">
        <h2 className='title'>Payment Method</h2>
        <div className="payment-container">
          <form action="#" method='post'>
            <input type="text" placeholder='Name on card' />
            <input type="text" placeholder='Card Number' />
            <input type="text" placeholder='Expiry Date' />
            <input type="text" placeholder='CVV' />
            <input type="submit" value="Pay" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout