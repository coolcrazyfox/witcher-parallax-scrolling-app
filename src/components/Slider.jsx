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
        // spaceBetween={575}
        // slidesPerView={1}
        style={{
          "--swiper-navigation-color": "red",
          "--swiper-pagination-color": "red",
        }}
        speed={1000}
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
            <div data-swiper-parallax="35%" src={s.back} className="slider__layer" ></div>
            <div data-swiper-parallax="25%" src={s.center}
            className="slider__layer"
            //  style={{backgroundSize: "cover " , height: '100vh', width: '100vw', backgroundPosition: 'center'}}
             ></div>
            <canvas className="slider__layer" data-swiper-parallax="18%" data-color={s.color}></canvas>  
            <div data-swiper-parallax="14%" src={s.front}
            className="slider__layer"
            //  style={{backgroundSize: "cover " , height: '100vh', width: '100vw', backgroundPosition: 'center'}}
             ></div>    
              {/* <div className="slider__layer" data-swiper-parallax="35%" style={{backgroundImage: `url(${s.back})`}}></div> 
              <div className="slider__layer" data-swiper-parallax="25%" style={{backgroundImage: `url(${s.center})`}}></div>*/}
              {/* <canvas className="slider__layer" data-swiper-parallax="18%" data-color={s.color}></canvas> */}
              {/*<div className="slider__layer" data-swiper-parallax="14%" style={{backgroundImage: `url(${s.front})`}}></div> */}
          </div>
        </SwiperSlide>
      )

      )}
        
        
    </Swiper>
  )
}

export default Slider
