import React from 'react'
import './Hero.css'
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countUp"
const Hero = () => {
  return (
  <section className="innerWidth hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">
<div className="flexColStart hero-left">
<div className="hero-title">
  <div className="orange-circle" />
  <h1>LIGHT HOUSE TECHNOLOGY</h1>

  <h2>
    Discover The Secret Behind Internet Wealth
  </h2>
</div>
<div className=" flexColStart hero-des">
  <span className='secondaryText' >Explore the hidden wealth in the internet  </span>
  <span className='secondaryText'>Discoveries on the latest wealth generating avenue</span>
</div>
<div className="flexCenter search-bar">
  <HiLocationMarker color="var(--blue)" size= {25} />
  <input type="text" />
  <button className="button">Search</button>
</div>
<div className="flexCenter stats">
  <div className="flexColCenter stat">
    <span> <CountUp start={4} end={10} duration={4}/>
    <span>+</span>
    </span>
    <span className='secondaryText'>No. of Articles</span>

  </div>
  <div className="flexColCenter stat">
    <span> <CountUp start={70} end={100} duration={4}/>
    <span>+</span>
    </span>
    <span className='secondaryText'>No. Of Visitors Visited</span>

  </div>

</div>
</div>
<div className=" flexCenter hero-right">
    <div className="image-container">
        <img src="./hero33.png" alt="" />
    </div>

</div>
    </div>
  </section>
  )
}

export default Hero
