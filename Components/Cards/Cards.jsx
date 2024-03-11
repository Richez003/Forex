import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css'
import data from "../../src/utils/slider.json";
import { sliderSettings } from '../../src/utils/common';
import {useHistory} from "react-router-dom"

export default function Cards ({id}){
    const history = useHistory();

    const navigate = () => history.push("../Blog/Blog.jsx") 
        return (
      <>
      <Swiper {...sliderSettings} className='swipper'>
              <SliderButton/>
              {
            data.map((card, i)=>(
              <SwiperSlide key={i}>
                  <div className=" flexColStart r-card" onClick={navigate}>
                      <img src={card.image} alt="home" flexCenter />
                      <span className="secondaryText r-price">
                          <span style={{color: "orange"}}>$</span>
                          <span>{card.price}</span>
                      </span>
                      <span className='primaryText'>{card.name}</span>
                      <span className='secondaryText'>{card.detail}</span>
                  </div>
              </SwiperSlide>
            ))
              }
          </Swiper>
      </>
        )
      }


const SliderButton = ()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-button">
            <button  onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button  onClick={()=> swiper.slideNext()}>&gt;</button>
        </div> 
    )
}