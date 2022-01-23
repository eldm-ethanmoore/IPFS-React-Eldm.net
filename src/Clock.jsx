import React, { useEffect, useState } from 'react';
import './App.css';
import {format} from 'date-fns';
function Clock() {
  
  const [time, setTime] = useState(format(new Date(), '| E h:mm:ss aaaa'));

  useEffect(() => {
    const interval = setInterval(() => setTime( format(new Date(), '| E h:mm:ss aaaa')), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); 
  
   return (
     <>
      <div className="box" id='clock'>
        <h1>{time} <span className="right">CST |</span></h1>
      </div>
     </>
   );
}
export default Clock;