import React, { useState } from 'react'
import { fee_n_surcharges, user } from '../../constants'
import './Checkout.css'

const Checkout = () => {
  const [expiryDate, setExpirydate] = useState('')
  return (
    <div className='checkout'>
      <div className="left">
        <h2 className='title'>Fare Summary</h2>
        <div className="fare-container">
          <div className="base-fare d-flex">
            <span className="title">Base Fare</span>
            <span className="price"> ₹{user?.price}</span>
          </div>
          <div className="fee-surcharges d-flex">
            <span className='title'>Fee & Surcharges</span>
            <span className="price">₹{fee_n_surcharges}</span>
          </div>
          <div className="total d-flex">
            <span className="title">Total</span>
            <span className="price">₹{+user?.price + +fee_n_surcharges}</span>
          </div>
        </div>
      </div>
      <div className="right">
        <h2 className='title'>Payment Method</h2>
        <div className="payment-container">
          <form action="#" method='post'>
            <input type="text" placeholder='Name on card*' maxLength={20} minLength={6} required />
            <input type="text" placeholder='Card Number*' maxLength={16} minLength={16} required />
            <input type="month" value={expiryDate} onChange={(e) => setExpirydate(e.target.value)} required />
            <input type="text" placeholder='CVV*' maxLength={3} required />
            <input type="submit" value="Pay" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout