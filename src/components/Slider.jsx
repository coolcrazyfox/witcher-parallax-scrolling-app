import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/App.css'
import { Parallax, Pagination, Navigation } from "swiper";

const Slider = ({slides}) => {
  return (
    <Swiper
        spaceBetween={750}        
        style={{
          "--swiper-navigation-color": "red",
          "--swiper-pagination-color": "red",
        }}
        speed={500}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="slider"
      >
      {slides.map((s)=>(
        <SwiperSlide key={s.id}>
          <div className="slider__item">      
            <img data-swiper-parallax={s.firstData} 
              src={s.back}              
              className="slider__layer" />
            <img data-swiper-parallax={s.secondData}
              src={s.center}/>
             <img data-swiper-parallax={s.testData}
              src={s.test}             
              className="slider__layer"/>
            <canvas className="slider__layer" data-swiper-parallax={s.canvas} data-color={s.color}></canvas>  
            <img data-swiper-parallax={s.thirdData}
              src={s.front}            
              className="slider__layer"/>               
          </div>
          <div>
          test
          safsdf<a>safsdf</a>
          </div>
        </SwiperSlide>
      )

      )}        
        
    </Swiper>
  )
}

export default Slider
