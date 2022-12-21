import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaRss } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import Logo from '../../Images/logo-mobile.png';
import PaymentPic1 from '../../Images/Payments/1.png'
import PaymentPic2 from '../../Images/Payments/2.png'
import PaymentPic3 from '../../Images/Payments/3.png'
import PaymentPic4 from '../../Images/Payments/4.png'

const Footer = () => {
    return (
        <footer>
            <div className="footerInner MySize mt-5">
                <div className="row pb-5">
                    <div className="col-12 pt-5 pt-lg-0 col-lg-4">
                        <div className="footerLogo">
                            <img src={Logo} alt="" className='img-fluid' />
                            <h2><span>RR </span>host</h2>

                        </div>
                        <p>
                            We are Hostco, a web hosting company with 24/7 customer support. We provide best hosting solutions for your hosting needs. Our clients from personal to corporate. Our data center are all over the world to ensure your website is always up. You can choose shared hosting, vps hosting or cloud hosting. You can also be hosting reseller here. Happy hosting with us.</p>
                        <h4>We Accepted</h4>
                        <div className="acceptPayments mt-4">
                            <div className="row">
                                <div className="col-3 paymentImageBoxes">
                                    <div><img src={PaymentPic1} alt="" className='img-fluid' /></div>
                                </div>
                                <div className="col-3 paymentImageBoxes">
                                    <div><img src={PaymentPic2} alt="" className='img-fluid' /></div>
                                </div>
                                <div className="col-3 paymentImageBoxes">
                                    <div><img src={PaymentPic3} alt="" className='img-fluid' /></div>
                                </div>
                                <div className="col-3 paymentImageBoxes">
                                    <div><img src={PaymentPic4} alt="" className='img-fluid' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pt-5 pt-lg-0 col-lg-4 HostingAndCompany">
                        <div className="row">
                            <div className="col-6">
                                <h4>Hosting</h4>
                                <a href="#">Web Hosting</a>
                                <a href="#">VPS Hosting</a>
                                <a href="#">Cloud Hosting</a>
                                <a href="#">WordPress Hosting</a>
                                <a href="#">Email Hosting</a>
                                <a href="#">CMS  Hosting</a>
                                <a href="#">Ecommerce Hosting</a>
                                <a href="#">Website Builder</a>
                            </div>
                            <div className="col-6">
                                <h4>Company</h4>
                                <a href="#">About</a>
                                <a href="#">Affiliates</a>
                                <a href="#">Blog</a>
                                <a href="#">Careers</a>
                                <a href="#">Community</a>
                                <a href="#">News</a>
                                <a href="#">Partners</a>
                                <a href="#">Press Releases</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pt-5 pt-lg-0 col-lg-4">
                        <h4>Newsletter</h4>
                        <p>Signup for our newsletter to get the latest news in your inbox.</p>
                        <div className="emailBox my-3">
                            <input type="text" placeholder='enter your email' />
                            <button><BsArrowRight /></button>
                        </div>
                        <p><small>Your email is safe with us. We don't spam.</small></p>
                        <h4>Follow Us on</h4>
                        <div className="socialIcons mt-3">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaPinterest /></a>
                            <a href="#"><FaRss /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright pt-3 pb-2">
                <div className="MySize copyrightInner">
                    <div><p>Copyright 2022 - Hostco by Designesia</p></div>
                    <div>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
