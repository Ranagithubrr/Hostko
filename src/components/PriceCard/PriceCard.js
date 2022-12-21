import React from 'react';
import './PriceCard.css';
import { BsCheckCircleFill } from 'react-icons/bs';

const PriceCard = (props) => {
    return (
        <div className='col-12 col-lg-3 PriceCardCol'>
            <div className="priceCard">
                {
                    props.PlanName === 'Deluxe'  && <div className="recomanded"><span>Recommended</span></div>
                }
                <h4 className='CardPriceName'>{props.PlanName}</h4>
                <p className='CardDesc'>{props.PanDesc}</p>
                <h2 className='CardPrice'>${props.Price}<span>/mo</span></h2>
                <p className='normaly'>Normally <s>{`$${props.Normaly}`}</s></p>
                <button className='commonBtn BtnOverWrite'>get {props.PlanDue} plan</button>
                <p className='autoRenews'>Auto re-news at regular rate</p>
                <h5 className='topFeatures'>Top Features</h5>
                <ul className='topFeaturesItem'>

                    {
                        props.TopFeatures.map((ele,index) => {
                            return (
                                <li key={index}><span className='CheckIcon'><BsCheckCircleFill /></span><span className='text'>{ele}</span></li>
                            )
                        })
                    }

                </ul>
                <h5>Also Includes</h5>
                <ul className='topFeaturesItem'>
                    {
                        props.AlsoIncludes.map((ele,index) => {
                            return (
                                <li key={index}><span className='CheckIcon'><BsCheckCircleFill /></span><span className='text'>{ele}</span></li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default PriceCard
