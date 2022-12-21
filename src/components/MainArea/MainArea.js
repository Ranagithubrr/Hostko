import React, { useEffect, useState } from 'react';
import './MainArea.css';

const MainArea = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [dis,setDis] = useState(0)

  let interval;

  const startTimer = () => {
    // const countDownDate = new Date("Mar 1,2023").getTime();
    const countDownDate = new Date("Mar 1 2023 16:55:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      setDis(distance)
      const day = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
      const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const second = Math.floor((distance % (60 * 1000)) / 1000)
      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        // update timer
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    })
  }
  useEffect(() => {
    startTimer()
  })
  return (
    <div className='MainArea'>
      <div className="mainAreaInner MySize">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-8 mainAreaLeft">
            <h4 className='mt-4 mt-lg-0'>Black Friday Sale</h4>
            <h2>Up to 80% off 2-year hosting plans + free domain</h2>
           
            {
              dis < 0 ? <div className="offerClosed"><span>Offer Closed</span></div> : null
            }
            
            <div className="counterArea mt-3">
              <div className="counterBox">
                <h4>{days}</h4>
                <span>Days</span>
              </div>
              <div className="counterBox">
                <h4>{hours}</h4>
                <span>Hours</span>
              </div>
              <div className="counterBox">
                <h4>{minutes}</h4>
                <span>Minutes</span>
              </div>
              <div className="counterBox">
                <h4>{seconds}</h4>
                <span>Seconds</span>
              </div>
            </div>
            <button className='commonBtn mt-3'>Claim Deal</button>
            <p className='mt-3'>*30 days money back guarantee</p>
          </div>
          <div className="col-12 col-lg-4 mainAreaRight text-center">
            <h2 className='eightyPercent'>8<span>0 <div className="percent"><span>%</span></div> </span></h2>
            <h2 className='off'>off</h2>
            <h5>Limited offer</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainArea
