"use strict";

$(function() {

  if(localStorage.getItem("font-switch") == "false") {
    $(".font-switch__button_minus").addClass("font-switch__button_active");

    $("html").removeClass("html_font-zoom");
  } else if (localStorage.getItem("font-switch") == "true") {
    $(".font-switch__button_plus").addClass("font-switch__button_active");

    $("html").addClass("html_font-zoom");
  }

  $(".font-switch__button_plus").click(function() {
    $("html").addClass("html_font-zoom");

    $(".font-switch__button_minus").removeClass("font-switch__button_active");

    $(this).addClass("font-switch__button_active");

    localStorage.setItem("font-switch", true);

    return false;
  });

  $(".font-switch__button_minus").click(function() {
    $("html").removeClass("html_font-zoom");

    $(".font-switch__button_plus").removeClass("font-switch__button_active");

    $(this).addClass("font-switch__button_active");

    localStorage.setItem("font-switch", false);

    return false;
  });

});
