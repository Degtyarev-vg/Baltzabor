"use strict";

$(function() {

  $(".section-services__slider").slick({
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    dots: false,
    adaptiveHeight: false,
    arrows: true,
    appendArrows: $(".section-services__navigation"),
    prevArrow: "<span class=\"section-services__prev\"></span>",
    nextArrow: "<span class=\"section-services__next\"></span>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});
