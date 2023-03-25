

function App() {
  return (
    <div class="swiper slider">
      <div class="swiper-wrapper slider__wrapper">

        <div class="swiper-slide slider__item">
          <div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(img/screen-1/layer-back.jpg);"></div>
          <div class="slider__layer" data-swiper-parallax="25%" style="background-image: url(img/screen-1/layer-middle.png);"></div>
          <canvas class="particles slider__layer" data-swiper-parallax="18%" data-color="#BE9164"></canvas>
          <div class="slider__layer" data-swiper-parallax="14%" style="background-image: url(img/screen-1/layer-front.png);"></div>
        </div>

        <div class="swiper-slide slider__item">
          <div class="slider__layer" data-swiper-parallax="40%" style="background-image: url(img/screen-2/layer-back.jpg);"></div>
          <div class="slider__layer" data-swiper-parallax="34%" style="background-image: url(img/screen-2/layer-gera.png);"></div>
          <div class="slider__layer" data-swiper-parallax="30%" style="background-image: url(img/screen-2/layer-yen.png);"></div>
          <canvas class="particles slider__layer" data-swiper-parallax="20%" data-color="#525A6D"></canvas>
          <div class="slider__layer" data-swiper-parallax="14%" style="background-image: url(img/screen-2/layer-front.png);"></div>
        </div>

        <div class="swiper-slide slider__item">
          <div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(img/screen-3/layer-back.jpg);"></div>
          <div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(img/screen-3/layer-middle.png);"></div>
          <div class="slider__layer" data-swiper-parallax="29%" style="background-image: url(img/screen-3/layer-ciri.png);"></div>
          <canvas class="particles slider__layer" data-swiper-parallax="25%" data-color="#938086"></canvas>
          <div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(img/screen-3/layer-front.png);"></div>
        </div>

      </div>
	</div>
  );
}

export default App;
