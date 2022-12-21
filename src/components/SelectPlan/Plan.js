import React from 'react';
import './Plan.css';

const Plan = (props) => {
  return (
    <div className='col-12 col-lg-3 my-0 my-lg-5 '>
      <div className="SelectPlan">
        <div className="PlanNo"><span>{props.Step}</span> {props.BorderRight && <div className="RightBorder"></div>} </div>
        <div className="PlanBox">
            <h4>{props.PlanName}</h4>
            <p>{props.PlanText}</p>
        </div>
      </div>
    </div>
  )
}

export default Plan
