import React from 'react'
import './navbar.css' 
 import notification from "../../../public/notification.svg";
 import message from "../../../public/message.svg"
// import Noticaion from "../../img/.svg"
// import Noticaion from "../../img/message.svg"

const Navbar = () => {
  return (
     <div className='navbar'>
        
       <div className='icons'>
        <span>My work</span>
         <div className='icon'>
            <img src={notification} alt="" className='NotificationImg' />
            <span className='counter'>2</span>
         </div>
          <div className='icon'>
            <img src={message} alt="" className='messageImg' />
            <span className='counter'>2</span>
         </div>
       </div>
        

    </div>
  )
}

export default Navbar
