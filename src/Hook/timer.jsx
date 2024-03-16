import React, { useState, useEffect } from 'react';

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
    

      <div className='flex space-x-10 pl-4 text-[50px]'>
         <div className=''>{timeLeft.days}:</div>
         <div>{timeLeft.hours}:</div>
         <div>{timeLeft.minutes}:</div>
        <div> {timeLeft.seconds}</div>
      </div>

      <div className='flex p-4 pl-6 space-x-[55px] text-[15px]'>
      <div>Days </div>
      <div>Hours</div>
      <div>Mins</div>
      <div>Secs</div>
      </div>

    </div>
  );
};

export default Timer;