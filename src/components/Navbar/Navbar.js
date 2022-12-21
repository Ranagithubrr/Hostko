import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { MdCall, MdEmail } from 'react-icons/md';
import Logo from '../../Images/logo-mobile.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import Svgs1 from '../../Images/svgs/cloud-svgrepo-com.svg';
import Svgs2 from '../../Images/svgs/server-2-svgrepo-com.svg';
import Svgs3 from '../../Images/svgs/wordpress-svgrepo-com.svg';
import Svgs4 from '../../Images/svgs/server-svgrepo-com.svg';
const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    const [scrollToTop, setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollToTop(window.scrollY > 1000);
        });
    }, []);

    //sidebar click event
    const [sidebar,setSidebar] = useState('');
    // dropdown click events
    const [Home, setHome] = useState('');
    const [Pages, setPages] = useState('');
    const [More, setMore] = useState('');
    const [NewsStandard, setNewsStandard] = useState('');
    const [Hosting, setHosting] = useState('');
    const [Domain, setDomain] = useState('');
    const [NewsGrid, setNewsGrid] = useState('');
    const PagesClicked = () =>{
        if(Pages === ''){
            setPages('dropdownMobile');
            
        }else{
            setPages('')
            setNewsStandard('')
        }

    }
    return (
        <div className='navbarArea'>
            <div className="scrolTopBtn">
                <a href='#' className={`scrollBtn ${scrollToTop && 'showBtn'}`}><MdKeyboardArrowUp /></a>
            </div>
            {/* topbar area design */}

            <div className={`topbar ${scroll && 'topbarBgColor'}`}>
                <div className="topbarInner MySize">
                    <div className="topbarLeft d-none d-lg-block">
                        <h4>Get Free Shared Hosting!</h4>
                    </div>
                    <div className="topbarRight">
                        <div><span><MdCall /></span> <a href="tel:+880111111111">+8801715731654</a> </div>
                        <div><span> <MdEmail /></span> <a href="mailto:dev@gmail.com">dev@gmail.com</a> </div>
                    </div>
                </div>
            </div>
            {/* navbar area design  */}
            <div className={`navbar ${scroll && 'navbarBgColor'}`}>
                <div className="navbarInner row MySize">
                    <div className="navbarLogo col-5 col-lg-2 d-flex align-items-center">
                        <img src={Logo} alt="" />
                        <h2 className='d-none d-lg-block'><span>RR</span> host</h2>
                    </div>
                    <div className={`navbarItems col-7 pb-5 pb-lg-0 d-lg-block ${sidebar}`}>
                        <ul>
                            <li onClick={() => Home === '' ? setHome('dropdownMobile') : setHome('')}><a href="#">Home <span><RiArrowDownSLine /></span></a>
                                <div className={`dropdown ${Home}`}>
                                    <ul>
                                        <li onClick={()=> setSidebar('')}><a href="#">Homepage 1</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Homepage 3</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Homepage 3</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Homepage 4</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Homepage 5</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Homepage 6</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onClick={() => Hosting === '' ? setHosting('dropdownMobile') : setHosting('')}><a href="#">Hosting <span><RiArrowDownSLine /></span></a>
                                <div className={`megaDropdown ${Hosting}`}>
                                    <div className="megaDropInner MySize">
                                        <div className="row">
                                            <div className="col-12 col-lg-4">
                                                <h2>Host Made Easy</h2>
                                                <p>High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service. More than 100k websites hosted.</p>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <div className="row DropHostingArea">
                                                    <div className="col-3">
                                                        <img src={Svgs4} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9">
                                                        <h4>Shared Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>
                                                <div className="row DropHostingArea mt-3">
                                                    <div className="col-3">
                                                        <img src={Svgs1} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9">
                                                        <h4>Cloud Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <div className="row DropHostingArea">
                                                    <div className="col-3">
                                                        <img src={Svgs2} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9">
                                                        <h4>VPS Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>

                                                <div className="row DropHostingArea mt-3">
                                                    <div className="col-3">
                                                        <img src={Svgs3} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9 pb-5 pb-lg-0">
                                                        <h4>Wordpress Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Websites </a></li>
                            <li onClick={() => Domain === '' ? setDomain('dropdownMobile') : setDomain('')}><a href="#">Domain <span><RiArrowDownSLine /></span></a>
                                <div className={`megaDropdown ${Domain}`}>
                                    <div className="megaDropInner MySize">
                                        <div className="row">
                                            <div className="col-12 col-lg-4">
                                                <h2>Host Made Easy</h2>
                                                <p>High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service. More than 100k websites hosted.</p>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <div className="row DropHostingArea">
                                                    <div className="col-3">
                                                        <img src={Svgs4} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9">
                                                        <h4>Shared Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>
                                                <div className="row DropHostingArea mt-3">
                                                    <div className="col-3">
                                                        <img src={Svgs1} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9">
                                                        <h4>Cloud Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <div className="row DropHostingArea">
                                                    <div className="col-3">
                                                        <img src={Svgs2} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9">
                                                        <h4>VPS Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>

                                                <div className="row DropHostingArea mt-3">
                                                    <div className="col-3">
                                                        <img src={Svgs3} alt="imageHere" />
                                                    </div>
                                                    <div className="col-9">
                                                        <h4>Wordpress Hosting</h4>
                                                        <p className='text-light'> Simple and powerfull hosting for everyone.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Help </a></li>
                            <li ><a href="#" onClick={PagesClicked}>Pages <span><RiArrowDownSLine /></span></a>
                                <div className={`dropdown ${Pages}`}>
                                    <ul>
                                       <li><a href="#" onClick={() => NewsStandard === '' ? setNewsStandard('dropdownMobile') : setNewsStandard('')}>News Standard</a>
                                            <div className={`subDrop ${NewsStandard}`}>
                                                <ul>
                                                    <li><a href="#" onClick={()=> setSidebar('')}>Right Sidebar</a></li>
                                                    <li><a href="#" onClick={()=> setSidebar('')}>Right Sidebar</a></li>
                                                    <li><a href="#" onClick={()=> setSidebar('')}>Right Sidebar</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#" onClick={() => NewsGrid === '' ? setNewsGrid('dropdownMobile') : setNewsGrid('')}>News Grid</a>
                                            <div className={`subDrop ${NewsGrid}`}>
                                                <ul>
                                                    <li><a href="#" onClick={()=> setSidebar('')}>Right Sidebar</a></li>
                                                    <li><a href="#" onClick={()=> setSidebar('')}>Right Sidebar</a></li>
                                                    <li><a href="#" onClick={()=> setSidebar('')}>Right Sidebar</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Contact</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Login</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>Register</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>404</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li onClick={() => More === '' ? setMore('dropdownMobile') : setMore('')}><a href="#">More <span><RiArrowDownSLine /></span></a>
                                <div className={`dropdown ${More}`}>
                                    <ul>
                                        <li><a href="https://google.com" target='_blank' onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                        <li><a href="#" onClick={()=> setSidebar('')}>More Items</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="navbarFreeTrail col-7 col-lg-2 d-flex align-items-center float-right">

                        <button className='commonBtn float-right'>Free Trial</button>
                        <button onClick={ ()=> sidebar === '' ? setSidebar('showSideBar') : setSidebar('')} className='float-right barBtn d-md-none'><FaBars /></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;