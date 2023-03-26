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
  );
}

export default App;
