import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const items=["Solutions","Company","Pricing","Resources","Contact Us"]
  return (
    <div className='navbar-wrapper'>

        <div className='nav-maintext'>
            OHSM
        </div>

        <ul className='nav-items'>
         {items.map((item,index)=>{
            return(
              <div className='item-wrapper'>
               <li key={index} className='nav-listitems'>{item}</li>
               </div>
            )
         })}
        </ul>

        <div className='nav-button'>
          <button className='login-button'>Log In</button>
          <button className='demo-button'>Request a demo</button>
        </div>

    </div>
  )
}

export default Navbar