import React from 'react';
import './Explore.css';
import Navbar from './Navbar';


export default function explore() {
  return (
    <div>
      <Navbar />
      <div className="explore">
        <div className="explore-content">

      <div className="explore-posts">
        <img src="https://i.pinimg.com/564x/c4/88/90/c488908aba4f87fd177c6ca39bf0f3c2.jpg" alt="" />
        <img src="https://i.pinimg.com/564x/84/7b/f1/847bf169ed956841605fd94c4be734e7.jpg" alt="" />
      </div>

      <div className="explore-posts">
      <img src="https://i.pinimg.com/736x/8c/51/42/8c5142e221e46bfcadf6ffb6ac5f7070.jpg" alt="" />
        <img src="https://i.pinimg.com/564x/4a/fd/61/4afd61599e820902c2f8883c2871e910.jpg" alt="" />
      </div>
    
      <div className="explore-reel" >
        <video autoPlay loop muted src="https://res.cloudinary.com/kanishkkcloud18/video/upload/v1721320019/82205ae7db2643c2a96621130a24807c_epv9fy.mp4" alt=""/>
      </div>

      <div className="explore-reel">
        <video autoPlay loop muted src="https://res.cloudinary.com/kanishkkcloud18/video/upload/v1721320108/cf23dd38fd244e02be1545ade5e10e4f_xjyelb.mp4" alt=""/>
      </div>

      <div className="explore-posts">
        <img src="https://i.pinimg.com/736x/1b/e4/01/1be401ff0b4c749f6b736da6448d660c.jpg" alt="" />
        <img src="https://i.pinimg.com/564x/7c/1e/27/7c1e2701b4e693c7ccd91715528e529b.jpg" alt="" />
      </div>

      <div className="explore-posts">
        <img src="https://i.pinimg.com/564x/10/ac/d9/10acd9198aa1cd459fc721037ed4bfc4.jpg" alt="" />
        <img src="https://i.pinimg.com/564x/a1/f5/b8/a1f5b80b2e375c84f70fd12c8692adf0.jpg" alt="" />
      </div>

</div>
      </div>
    </div>
  )
}
