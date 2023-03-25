


function App() {
  return (
    <div className="swiper slider">
      <div className="swiper-wrapper slider__wrapper">

        <div className="swiper-slide slider__item">
          <div className="slider__layer" data-swiper-parallax="35%" style="background-image: url(img/screen-1/layer-back.jpg);"></div>
          <div className="slider__layer" data-swiper-parallax="25%" style="background-image: url(img/screen-1/layer-middle.png);"></div>
          <canvas className="particles slider__layer" data-swiper-parallax="18%" data-color="#BE9164"></canvas>
          <div className="slider__layer" data-swiper-parallax="14%" style="background-image: url(img/screen-1/layer-front.png);"></div>
        </div>

        <div className="swiper-slide slider__item">
          <div className="slider__layer" data-swiper-parallax="40%" style="background-image: url(img/screen-2/layer-back.jpg);"></div>
          <div className="slider__layer" data-swiper-parallax="34%" style="background-image: url(img/screen-2/layer-gera.png);"></div>
          <div className="slider__layer" data-swiper-parallax="30%" style="background-image: url(img/screen-2/layer-yen.png);"></div>
          <canvas className="particles slider__layer" data-swiper-parallax="20%" data-color="#525A6D"></canvas>
          <div className="slider__layer" data-swiper-parallax="14%" style="background-image: url(img/screen-2/layer-front.png);"></div>
        </div>

        <div className="swiper-slide slider__item">
          <div className="slider__layer" data-swiper-parallax="48%" style="background-image: url(img/screen-3/layer-back.jpg);"></div>
          <div className="slider__layer" data-swiper-parallax="35%" style="background-image: url(img/screen-3/layer-middle.png);"></div>
          <div className="slider__layer" data-swiper-parallax="29%" style="background-image: url(img/screen-3/layer-ciri.png);"></div>
          <canvas className="particles slider__layer" data-swiper-parallax="25%" data-color="#938086"></canvas>
          <div className="slider__layer" data-swiper-parallax="16%" style="background-image: url(img/screen-3/layer-front.png);"></div>
        </div>

      </div>
	</div>
  );
}

export default App;
