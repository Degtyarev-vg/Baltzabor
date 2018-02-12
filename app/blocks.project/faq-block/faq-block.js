"use strict";

$(function() {

  $(".faq-block__title").click(function() {
    $(this)
      .parents(".faq-block__item")
      .toggleClass("faq-block__item_open")
      .find(".faq-block__text")
      .slideToggle();

    return false;
  });

});
