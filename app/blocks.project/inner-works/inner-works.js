"use strict";

$(function() {

  $(".inner-works__item").each(function(i) {
    let imgGallery = $(this).find(".inner-works__img").attr("src");

    $(this).css({"background":"url(" + imgGallery + ") center no-repeat", "background-size":"cover"});
  });

  let sliderWorks = $(".inner-works__slider").slick({
    infinite: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    adaptiveHeight: false,
    focusOnSelect: true,
    arrows: true,
    appendArrows: $(".inner-works__navigation"),
    prevArrow: "<span class=\"inner-works__prev\"></span>",
    nextArrow: "<span class=\"inner-works__next\"></span>"
  }).on("beforeChange", function(e, slick, prev, i) {
    $(".inner-works__item-previews_" + i).click();

    $(".inner-works__item-previews")
      .removeClass("inner-works__item-previews_active");

    $(".inner-works__item-previews_" + i)
      .addClass("inner-works__item-previews_active");
  });


  let sliderWorksPreviews = $(".inner-works__slider-previews").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  }).on("breakpoint", function(event, slick, direction){
    $(".inner-works__item-previews").each(function(i) {
      let imgGalleryPreviews = $(this)
        .find(".inner-works__img-previews")
        .attr("src");

      $(this).css({"background":"url(" + imgGalleryPreviews + ") center no-repeat", "background-size":"cover"});
    });

    $(".inner-works__item-previews").click(function() {
      let number = $(this).attr("data-preview");

      $(".inner-works__item_" + number).click();
    });
  });


  $(".inner-works__item-previews").each(function(i) {
    let imgGalleryPreviews = $(this)
      .find(".inner-works__img-previews")
      .attr("src");

    $(this).css({"background":"url(" + imgGalleryPreviews + ") center no-repeat", "background-size":"cover"});
  });

  $(".inner-works__item-previews").click(function() {
    let number = $(this).attr("data-preview");

    $(".inner-works__item_" + number).click();
  });

});
