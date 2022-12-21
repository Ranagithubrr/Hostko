import React from 'react'

const SectionHeader = (props) => {

    return (
        <div className="hostingPlanInnerTop mt-5 text-center">
            <div className='hostingPlanText'><span>{props.SectionName}</span></div>
            <h2>{props.HeaderName}</h2>
            {
                props.ButtonTrig ? <div className="mothYearPlan">
                <span className='monthlyPlan'>Monthly Plan</span>
                <span>
                    <div className="switch" onClick={props.Trigger}>
                        <div className={`switchBtn ${props.SwitchClass}`}></div>
                    </div>
                </span>
                <span className='monthlyPlan'>Yearly Plan</span>
            </div> 
            :
            <div className="mothYearPlan">
                <span className='monthlyPlanTextOnly'>{props.HeaderText}</span>
            </div> 
            }
            {/* <div className="mothYearPlan">
                <span className='monthlyPlan'>Monthly Plan</span>
                <span>
                    <div className="switch" onClick={props.Trigger}>
                        <div className={`switchBtn ${props.SwitchClass}`}></div>
                    </div>
                </span>
                <span className='monthlyPlan'>Yearly Plan</span>
            </div> */}
        </div>
    )
}

export default SectionHeader
