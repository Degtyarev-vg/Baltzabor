"use strict";

$(function() {

  $(".section-works__item").each(function(i) {
    let imgGallery = $(this).find(".section-works__img").attr("src");

    $(this).css({"background":"url(" + imgGallery + ") center no-repeat", "background-size":"cover"});
  });

  let sliderWorks = $(".section-works__slider").slick({
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
    appendArrows: $(".section-works__navigation"),
    prevArrow: "<span class=\"section-works__prev\"></span>",
    nextArrow: "<span class=\"section-works__next\"></span>"
  }).on("beforeChange", function(e, slick, prev, i) {
    $(".section-works__item-previews_" + i).click();

    $(".section-works__item-previews")
      .removeClass("section-works__item-previews_active");

    $(".section-works__item-previews_" + i)
      .addClass("section-works__item-previews_active");
  });


  let sliderWorksPreviews = $(".section-works__slider-previews").slick({
    infinite: false,
    slidesToShow: 3,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  }).on("breakpoint", function(event, slick, direction){
    $(".section-works__item-previews").each(function(i) {
      let imgGalleryPreviews = $(this)
        .find(".section-works__img-previews")
        .attr("src");

      $(this).css({"background":"url(" + imgGalleryPreviews + ") center no-repeat", "background-size":"cover"});
    });

    $(".section-works__item-previews").click(function() {
      let number = $(this).attr("data-preview");

      $(".section-works__item_" + number).click();
    });
  });


  $(".section-works__item-previews").each(function(i) {
    let imgGalleryPreviews = $(this)
      .find(".section-works__img-previews")
      .attr("src");

    $(this).css({"background":"url(" + imgGalleryPreviews + ") center no-repeat", "background-size":"cover"});
  });

  $(".section-works__item-previews").click(function() {
    let number = $(this).attr("data-preview");

    $(".section-works__item_" + number).click();
  });

});
