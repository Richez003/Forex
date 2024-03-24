import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
<section className="f-wrapper">
  <div className="paddings innerWidth flexCenter f-container">
    <div className="flexColStart f-left">
      <span className="f-logo">
      <img src='./Logo1.png' alt='' width={120}/>
        <h3>LIGHT HOUSE TECHNOLOGIES</h3>
      </span>
      <span className="secondaryText">
          Our vision is give right knowledge on making <br/>money online
      </span>
    </div>
    <div className="flexColStart f-right">
      <span className='primaryText'>Information</span>
      <span className='secondaryText'>calll</span>
      <div className="f-menu flexStart">
        <span>Product</span>
        <span>services</span>
        <span>About Us</span>
        <span>Properties</span>
        </div>
    </div>
  </div>
    
</section>
  )
}

export default Footer
