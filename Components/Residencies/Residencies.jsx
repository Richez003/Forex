import React from 'react'
import './Residencies.css';

import Cards from '../Cards/Cards';
const Residencies = () => {
  return (
  <section className="r-wrapper">
<div className=" paddings innerWidth r-container">
    <div className=" r-head flexColCenter">
        <span className='primaryText'>Recent Post</span>
    </div>
    <Cards/>
</div>
  </section>
  )
}

export default Residencies

