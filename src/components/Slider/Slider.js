import React from 'react';
import './Slider.css';
import SlickSlider from 'react-slick';
import logo1 from '../../Images/logos/1.png'
import logo2 from '../../Images/logos/2.png'
import logo3 from '../../Images/logos/3.png'
import logo4 from '../../Images/logos/4.png'
import logo5 from '../../Images/logos/5.png'
import logo6 from '../../Images/logos/6.png'
import logo7 from '../../Images/logos/7.png'
import logo8 from '../../Images/logos/8.png'

const Slider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        arrows:false,
        focusOnSelect:false,
        autoplaySpeed:3000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    const settingsMobile = {
        dots: false,
        infinite: true,
        autoplay:true,
        arrows:false,
        focusOnSelect:false,
        autoplaySpeed:3000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className='sliderArea'>
            <div className="sliderAreaInner MySize d-none d-lg-block">
                <SlickSlider {...settings}>
                    <div>
                        <img src={logo1} alt="" />
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>
                    <div>
                        <img src={logo3} alt="" />
                    </div>
                    <div>
                        <img src={logo4} alt="" />
                    </div>
                    <div>
                        <img src={logo5} alt="" />
                    </div>
                    <div>
                        <img src={logo6} alt="" />
                    </div>
                    <div>
                        <img src={logo7} alt="" />
                    </div>
                    <div>
                    <img src={logo8} alt="" />
                    </div>
                </SlickSlider>
            </div>
            <div className="sliderAreaInner MySize d-block d-lg-none">
                <SlickSlider {...settingsMobile}>
                    <div>
                        <img src={logo1} alt="" />
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>
                    <div>
                        <img src={logo3} alt="" />
                    </div>
                    <div>
                        <img src={logo4} alt="" />
                    </div>
                    <div>
                        <img src={logo5} alt="" />
                    </div>
                    <div>
                        <img src={logo6} alt="" />
                    </div>
                    <div>
                        <img src={logo7} alt="" />
                    </div>
                    <div>
                    <img src={logo8} alt="" />
                    </div>
                </SlickSlider>
            </div>
        </div>
    )
}

export default Slider
