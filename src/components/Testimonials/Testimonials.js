import React from 'react';
import MembersSlider from '../MembersSlider/MembersSlider';
import SectionHeader from '../SectionHeader/SectionHeader';
import Slider from "react-slick";
import './Testimonials.css';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
       
    };
    const settingsMobile = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
       
    };
    return (
        <div className='Testimonials'>
            <div className="testimonialsInner MySize">
                <SectionHeader
                    HeaderText='Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation nulla dolore ut id velit et ut anim.'
                    HeaderName={["Trusted by over 5,000 happy customers ", <span>worldwide</span>]}
                    SectionName='TESTIMONIALS'
                />
                <div className="MembersSlider row mt-5 d-none d-lg-block">
                    <Slider {...settings}>
                    <div className="col-4"><MembersSlider  NameTi="Thomas, Samsung"/></div>
                    <div className="col-4"><MembersSlider  NameTi="Sandra, Microsoft"/></div>
                    <div className="col-4"><MembersSlider  NameTi="John, Tesla"/></div>
                    <div className="col-4"><MembersSlider  NameTi="Sara, Apple"/></div>
                    <div className="col-4"><MembersSlider  NameTi="Bridon, Pixel"/></div>
                    </Slider>
                    
                </div>
                <div className="MembersSlider row mt-5 d-block d-lg-none">
                    <Slider {...settingsMobile}>
                    <div className="col-12"><MembersSlider  NameTi="Thomas, Samsung"/></div>
                    <div className="col-12"><MembersSlider  NameTi="Sandra, Microsoft"/></div>
                    <div className="col-12"><MembersSlider  NameTi="John, Tesla"/></div>
                    <div className="col-12"><MembersSlider  NameTi="Sara, Apple"/></div>
                    <div className="col-12"><MembersSlider  NameTi="Bridon, Pixel"/></div>
                    </Slider>
                    
                </div>
            </div>

        </div>
    )
}

export default Testimonials
