import React from 'react'
import './Header.css'
const Header = () => {
  return (
   <section className="innerWidth h-wrapper">
<div className=" flexCenter innerWidth h-container">
    <img src="./Logo1.png" alt="logo" width={100}/>
    <h2>Light House Technologies</h2>
    <div className=" flexCenter h-menu">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact us</a>
        <a href="">Blog</a>
        <button className='button'>
        <a href="">Contact Us</a>
        </button>
    </div>
</div>
   </section>
  )
}

export default Header
