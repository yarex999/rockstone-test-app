import React, { useState } from 'react';

function Page2(){
    const [current, setCurrent] = useState('');
    
   setInterval(()=>{
       let time = new Date();
       let h = time.getHours();
       let m = time.getMinutes();
       let s = time.getSeconds();
       return setCurrent(`${h < 10? '0' + h : h}:${m < 10? '0' + m : m}:${s < 10? '0' + s : s}`);
   },1000)

    return (
        
    <div className="page page-two">
        <p className="time">{current}</p>
    </div>

    )
}

export default Page2;