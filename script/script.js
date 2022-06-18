'use strict';

import Carousel from './modules/Carousel.js';

let carousel = new Carousel({
  arrows: '.carousel__arrows > div',
  contents: '.carousel__item',
  dots: '.carousel__navigation-btn'
});

carousel.init();