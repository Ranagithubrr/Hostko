import React from 'react';
import Plan from './Plan';

const SelectPlan = () => {
    return (
        
            <div className="MySize d-flex">
                <div className='row'>
                <Plan
                    Step="1"
                    PlanName="Select Plan"
                    PlanText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, unde cumque. Neque nobis obcaecati facere quae molestiae eum enim aliquid."
                    BorderRight='Yes'
                />
                <Plan
                    Step="2"
                    PlanName="Choose Domain"
                    PlanText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ex tenetur, repellendus nemo similique odio amet distinctio. Sint, accusantium rerum?"
                    BorderRight='Yes'
                />
                <Plan
                    Step="3"
                    PlanName="Login/Register"
                    PlanText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi distinctio aut incidunt sequi minima earum, optio ducimus asperiores iusto quas?"
                    BorderRight='Yes'
                />
                <Plan
                    Step="4"
                    PlanName="Make Payment"
                    PlanText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laudantium blanditiis, nulla fuga repudiandae earum doloremque aspernatur ab ullam nesciunt?"
                />
            </div>

        </div>
    )
}

export default SelectPlan
