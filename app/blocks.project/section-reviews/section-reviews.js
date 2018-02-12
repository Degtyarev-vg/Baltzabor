"use strict";

$(function() {

  $(".section-reviews__slider").slick({
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    dots: false,
    adaptiveHeight: true,
    arrows: true,
    focusOnSelect: true,
    appendArrows: $(".section-reviews__navigation"),
    prevArrow: "<span class=\"section-reviews__prev\"></span>",
    nextArrow: "<span class=\"section-reviews__next\"></span>"
  });

});
