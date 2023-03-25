import React from "react";
import './styles/App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import layerBack from './assets/img/screen-1/layer-back.jpg'
import layerMiddle from './assets/img/screen-1/layer-middle.png'
import layerFront from './assets/img/screen-1/layer-front.png'

import layerBackSecond from './assets/img/screen-2/layer-back.jpg'
import layerGera from './assets/img/screen-2/layer-gera.png'
import layerYen from './assets/img/screen-2/layer-yen.png'
import layerFrontSecond from './assets/img/screen-2/layer-front.png'

import layerBackThird from './assets/img/screen-3/layer-back.jpg'
import layerMiddleThird from './assets/img/screen-3/layer-middle.png'
import layerCiri from './assets/img/screen-3/layer-ciri.png'
import layerFrontThird from './assets/img/screen-3/layer-front.png'




function App() {
  //first
  const layerBackFirst = {
    backgroundImage: `url(${layerBack})`
  }
  const layerMiddleFirst = {
    backgroundImage: `url(${layerMiddle})`
  }
  const layerFrontFirst = {
    backgroundImage: `url(${layerFront})`
  }
  //second
  const layerBackSecondImg = {
    backgroundImage: `url(${layerBackSecond})`
  }
  const layerGeraImg = {
    backgroundImage: `url(${layerGera})`
  }
  const layerYenImg = {
    backgroundImage: `url(${layerYen})`
  }
  const layerFrontSecondImg = {
    backgroundImage: `url(${layerFrontSecond})`
  }
  //third
  const layerBackThirdImg = {
    backgroundImage: `url(${layerBackThird})`
  }
  const layerMiddleThirdImg = {
    backgroundImage: `url(${layerMiddleThird})`
  }
  const layerCiriImg = {
    backgroundImage: `url(${layerCiri})`
  }
  const layerFrontThirdImg = {
    backgroundImage: `url(${layerFrontThird})`
  }
  

  
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >

        <div 
          slot="container-start"
          className="slider"
          // className="parallax-bg"
          // style={{
          //   "background-image":
          //     "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          // }}
          data-swiper-parallax="-23%"
        >
          <div className="slider__wrapper"
            slot="container-start"
            data-swiper-parallax="-23%"
          >
          <SwiperSlide>
            <div className="slider__item">
              <div className="slider__layer" data-swiper-parallax="35%" style={{layerBackFirst}}></div>
              <div className="slider__layer" data-swiper-parallax="25%" style={{layerMiddleFirst}}></div>
              <canvas className="slider__layer" data-swiper-parallax="18%" data-color="#BE9164"></canvas>
              <div className="slider__layer" data-swiper-parallax="14%" style={{layerFrontFirst}}></div>
            </div>
          </SwiperSlide>

            
          <SwiperSlide>
            <div className="slider__item">
              <div className="slider__layer" data-swiper-parallax="40%" style={{layerBackSecondImg}}></div>
              <div className="slider__layer" data-swiper-parallax="34%" style={{layerGeraImg}}></div>
              <div className="slider__layer" data-swiper-parallax="30%" style={{layerYenImg}}></div>
              <canvas className="slider__layer" data-swiper-parallax="20%" data-color="#525A6D"></canvas>
              <div className="slider__layer" data-swiper-parallax="14%" style={{layerFrontSecondImg}}></div>
            </div>
          </SwiperSlide>
            
          <SwiperSlide>
            <div className="slider__item">
              <div className="slider__layer" data-swiper-parallax="48%" style={{layerBackThirdImg}}></div>
              <div className="slider__layer" data-swiper-parallax="35%" style={{layerMiddleThirdImg}}></div>
              <div className="slider__layer" data-swiper-parallax="29%" style={{layerCiriImg}}></div>
              <canvas className="particles slider__layer" data-swiper-parallax="25%" data-color="#938086"></canvas>
              <div className="slider__layer" data-swiper-parallax="16%" style={{layerFrontThirdImg}}></div>
            </div>
          </SwiperSlide>
            

          </div>
        </div>

      </Swiper>
    </>

    
  );
}

export default App;
