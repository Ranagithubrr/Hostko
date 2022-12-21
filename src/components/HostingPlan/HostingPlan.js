import React, { useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Hostingplan.css';

const HostingPlan = () => {
    const [switchClass, setSwitch] = useState('');
    const [planDue, setPlanDue] = useState('Monthly');
    const [StarterPrice, setStarterPrice] = useState(3.59);
    const [PlusPrice, setPlusPrice] = useState(5.59);
    const [deluxPrice, setdeluxPrice] = useState(8.59);
    const [ultimatePrice, setultimatePrice] = useState(15.59);
    const SwitchTrigger = () => {
        switchClass === 'rightBtn' ? setSwitch('') : setSwitch('rightBtn');
        StarterPrice === 3.59 ? setStarterPrice(2.59) : setStarterPrice(3.59);
        PlusPrice === 5.59 ? setPlusPrice(3.59) : setPlusPrice(5.59);
        deluxPrice === 8.59 ? setdeluxPrice(5.59) : setdeluxPrice(8.59);
        ultimatePrice === 15.59 ? setultimatePrice(10.59) : setultimatePrice(15.59);
        planDue === 'Monthly' ? setPlanDue('Yearly') : setPlanDue('Monthly');

    }
    return (
        <div className='hostingPlan py-2'>
            <div className="hostingPlanInner MySize">

                {
                    <SectionHeader
                        Trigger={SwitchTrigger}
                        SwitchClass={switchClass}
                        ButtonTrig='Yes'
                        HeaderText='Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation nulla dolore ut id velit et ut anim.'
                        HeaderName={["Choose Perfect", <span> Web Hosting </span>, "Package For You"]}
                        SectionName='HOSTING PLAN'
                    />
                }
                <div className="hostingPlanInnerBottom row mt-4">
                    <PriceCard
                        PlanName="Starter"
                        PanDesc="Ideal solution for beginners."
                        Normaly="9.99" PlanDue={planDue}
                        Price={StarterPrice}
                        TopFeatures={['1 Website',
                            '10 GB SSD Storage',
                            'Custom Themes',
                            '24/7 Customer Support'
                        ]}
                        AlsoIncludes={['1 Website',
                            'Free Domain - 1 year',
                            'Free CDN Included',
                            'Free SSL for the 1st year'
                        ]}
                    />

                    <PriceCard
                        PlanName="Plus"
                        PanDesc="For those need to running multiple sites."
                        Normaly="15.99" PlanDue={planDue}
                        Price={PlusPrice}
                        TopFeatures={['Unlimited Website',
                            '20 GB SSD Storage',
                            'Custom Themes',
                            '24/7 Customer Support'
                        ]}
                        AlsoIncludes={['1 Website',
                            'Free Domain - 1 year',
                            'Free CDN Included',
                            'Free SSL Certificate'
                        ]}
                    />
                    <PriceCard
                        PlanName="Deluxe"
                        PanDesc="Unlimited sites with automated backup."
                        Normaly="24.99"
                        PlanDue={planDue}
                        Price={deluxPrice}
                        TopFeatures={['Unlimited Website',
                            '40 GB SSD Storage',
                            'Custom Themes',
                            '24/7 Customer Support'
                        ]}
                        AlsoIncludes={['1 Website',
                            'Free Domain - 1 year',
                            'Free CDN Included',
                            'Free SSL Certificate',
                            'Free Domain Privacy',
                            'Free Automated Backup'
                        ]}
                    />
                    <PriceCard
                        PlanName="Ultimate"
                        PanDesc="Best performance with optimized CPU resources."
                        Normaly="36.99" PlanDue={planDue}
                        Price={ultimatePrice}
                        TopFeatures={['Unlimited Website',
                            '100 GB SSD Storage',
                            'Custom Themes',
                            '24/7 Customer Support',
                            'Optimized CPU Resources'
                        ]}
                        AlsoIncludes={['1 Website',
                            'Free Domain - 1 year',
                            'Free CDN Included',
                            'Free SSL Certificate',
                            'Free Domain Privacy',
                            'Free Automated Backup',
                            'Free Dedicated IP'
                        ]}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default HostingPlan;