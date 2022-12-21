import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader';
import './ServerLocation.css';

const ServerLocation = () => {
    return (
        <div className='serverLocation'>
            <div className="serverLocationInner MySize">
                <SectionHeader
                    HeaderText='Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation nulla dolore ut id velit et ut anim.'
                    HeaderName={["Server Locations"]}
                    SectionName='DISCOVER'
                />
                <div className="mapArea mt-5">
                    <div className="canada countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>Canada</span>
                        </div>
                    </div>
                    <div className="usa countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>United States</span>
                        </div>
                    </div>
                    <div className="sweden countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>Sweden</span>
                        </div>
                    </div>
                    <div className="france countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>France</span>
                        </div>
                    </div>
                    <div className="china countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>China</span>
                        </div>
                    </div>
                    <div className="indo countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="aus countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>Australia</span>
                        </div>
                    </div>
                    <div className="brazil countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>Brazil</span>
                        </div>
                    </div>
                    <div className="sa countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            <span>South Africa</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ServerLocation
