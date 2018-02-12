"use strict";

$(function() {

  $(".section-prices__list").slick({
    infinite: true,
    fade: false,
    autoplay: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    draggable: false,
    variableWidth: true,
    dots: false,
    adaptiveHeight: true,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    appendArrows: $(".section-prices__navigation"),
    prevArrow: "<span class=\"section-prices__prev\"></span>",
    nextArrow: "<span class=\"section-prices__next\"></span>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          speed: 500,
          centerMode: false,
          variableWidth: false,
          swipe: true,
          draggable: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          speed: 500,
          centerMode: false,
          variableWidth: false,
          swipe: true,
          draggable: true,
          dots: true,
          appendDots: $(".section-prices__navigation")
        }
      }
    ]
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).find(".section-prices__item").each(function() {
      $(this).removeClass("section-prices__item_slide-prev");
      $(this).removeClass("section-prices__item_slide-next");
    });

    $(this)
      .find(".slick-center")
      .next()
      .addClass("section-prices__item_slide-prev");

    $(this)
      .find(".slick-center")
      .prev()
      .addClass("section-prices__item_slide-next");
  });

});
