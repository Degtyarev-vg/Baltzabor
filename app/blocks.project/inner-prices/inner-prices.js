"use strict";

$(function() {

  let pricesSlider = $(".inner-prices__list").slick({
    infinite: true,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide: true,
    dots: false,
    adaptiveHeight: false,
    arrows: false,
    appendArrows: $(".inner-prices__navigation"),
    prevArrow: "<span class=\"inner-prices__prev\"></span>",
    nextArrow: "<span class=\"inner-prices__next\"></span>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  });

});
