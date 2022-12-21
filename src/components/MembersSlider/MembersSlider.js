import React from 'react';
import './MembersSlider.css';
import Avatar from '../../Images/avatar.png';
import { FaQuoteLeft } from 'react-icons/fa'

const MembersSlider = (props) => {
    return (
        <div className="memberSlide">
            <div className="QuoteIcon"><span><FaQuoteLeft /></span></div>
            <h4 className='hosMemberName'>Excellent Hosting</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus? Beatae, ipsam error? Harum aliquam voluptate repellat eaque facilis assumenda!</p>
            <div className="memberSlideBottom">
                <div className="imageBox"><img src={Avatar} alt="demoimg" className='img-fluid' /></div>
                <h4 className='memberName'>{props.NameTi}</h4>
            </div>
        </div>
    )
}

export default MembersSlider
