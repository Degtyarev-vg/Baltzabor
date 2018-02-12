"use strict";

$(function() {

  function regulationsForMq(mq) {
    if (mq.matches) {
      $(".footer-inner__menu-title").click(function() {
        $(this)
            .toggleClass("footer-inner__menu-title_open")
            .next()
            .slideToggle();
      });

      $(".footer-inner__menu-list")
          .css("display", "none");

      $(".footer-inner__contacts-block")
          .css("display", "none");
    } else {
      $(".footer-inner__menu-title")
          .unbind("click")
          .removeClass("footer-inner__menu-title_open");

      $(".footer-inner__menu-list")
          .css("display", "inline-block");

      $(".footer-inner__contacts-block")
          .css("display", "inline-block");
    }
  }

  let mq = window.matchMedia("screen and (max-width: 767px)");

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

});
