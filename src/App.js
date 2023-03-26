import React from "react";
import './styles/App.css'

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
import Slider from './components/Slider';

function App() {
  const initState = [
    {id:1, back: `${layerBack}`,test: null, front: `${layerFront}`, center: `${layerMiddle}`, color: "#BE9164", firstIData: '35%', secondData:'25%',testData:'0%', canvas:'18%', thirdData:'14%'},
    {id:2, back: `${layerBackSecond}`,test:`${layerYen}`, front: `${layerFrontSecond}`, center: `${layerGera}`, color: "#525A6D", firstIData: '40%', secondData:'34%',testData:'30%',canvas:'20%', thirdData:'14%'},
    {id:3, back: `${layerBackThird}`,test:`${layerCiri}`, front: `${layerFrontThird}`, center: `${layerMiddleThird}`, color: "#938086", firstIData: '48%', secondData:'35%',testData:'29%',canvas:'25%', thirdData:'16%'},
    
    
  ] 
  
  return (
    <>
      <Slider slides={initState}/>
    </>
    
    
      


        //  <div 
          // slot="container-start"
          // className="slider"
          // className="parallax-bg"
          // style={{backgroundImage: `url(${layerBack})`}}
          // style={{
            
          //   "background-image":
          //     "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          // }}
          // data-swiper-parallax="-23%"
        // >
          // <div className="slider__wrapper"
            // slot="container-start"
            // data-swiper-parallax="-23%"
          // >          
            
          // <SwiperSlide >            
          //   <div className="slider__item">              
          //     <div className="slider__layer" data-swiper-parallax="35%" style={{backgroundImage: `url(${layerBack})`}}></div>
          //     <div className="slider__layer" data-swiper-parallax="25%" style={{backgroundImage: `url(${layerMiddle})`}}></div>
          //     <canvas className="slider__layer" data-swiper-parallax="18%" data-color="#BE9164"></canvas>
          //     <div className="slider__layer" data-swiper-parallax="14%" style={{backgroundImage: `url(${layerFront})`}}></div>
          //   </div>
          // </SwiperSlide>

            
          // <SwiperSlide>
            // {/* <h1>2</h1> */}
          //   {/* <div className="slider__item">
          //     <div className="slider__layer" data-swiper-parallax="40%" style={{backgroundImage: `url(${layerBackSecond})`}}></div>
          //     <div className="slider__layer" data-swiper-parallax="34%" style={{backgroundImage: `url(${layerGera})`}}></div>
          //     <div className="slider__layer" data-swiper-parallax="30%" style={{backgroundImage: `url(${layerYen})`}}></div>
          //     <canvas className="slider__layer" data-swiper-parallax="20%" data-color="#525A6D"></canvas>
          //     <div className="slider__layer" data-swiper-parallax="14%" style={{backgroundImage: `url(${layerFrontSecond})`}}></div>
          //   </div>
          // </SwiperSlide>
            
          // <SwiperSlide>
          //   <div className="slider__item">              
          //     <div className="slider__layer" data-swiper-parallax="48%" style={{backgroundImage: `url(${layerBackThird})`}}></div>
          //     <div className="slider__layer" data-swiper-parallax="35%" style={{backgroundImage: `url(${layerMiddleThird})`}}></div>
          //     <div className="slider__layer" data-swiper-parallax="29%" style={{backgroundImage: `url(${layerCiri})`}}></div>
          //     <canvas className="particles slider__layer" data-swiper-parallax="25%" data-color="#938086"></canvas>
          //     <div className="slider__layer" data-swiper-parallax="16%" style={{backgroundImage: `url(${layerFrontThird})`}}></div>
          //   </div>
          // </SwiperSlide> */}
            

        //   {/* </div>
        // </div> */} 

      // </Swiper>
    

    
  );
}

export default App;
