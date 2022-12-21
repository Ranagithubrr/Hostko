import React from 'react';
import './Moneyback.css';
import Lady from '../../Images/lady.png';

const MoneyBack = () => {
  return (
    <div className='MoneyBack'>
      <div className="moneyBackInner MySize">
        <div className="row">
            <div className="col-4 d-none d-lg-block">
                <img src={Lady} alt="lady" className='img-fluid ladyImg'/>
            </div>
            <div className="col-12 col-lg-4 gurranty">
                <h2><span>30 days</span> money back guarantee</h2>
            </div>
            <div className="col-12 col-lg-4 getStarted">
                <p>If you not satisfy, we will refund your payment. No hassle, no risk. You can cancel plan at any time.</p>
                <button className="commonBtn my-3">Get Started</button>
                <p>*Cancellation must be within a maximum of 30 days</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyBack
