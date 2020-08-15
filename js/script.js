'use strict'

$(document).ready(function () {

  $('button.blog-block__btn--1').click(function () {
    console.log('click')
    $(this).toggleClass("displayNone")
    $('.blog-post--1').toggleClass('displayFlex')
  })

  $('button.blog-block__btn--2').click(function () {
    console.log('click')
    $(this).toggleClass("displayNone")
    $('.blog-post--2').toggleClass('displayFlex')
  })



  // scroll
  let $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
    return false;
  });

  // burger
  $('.nav__burger').click(() => {
    $('.nav__burger, .nav__list').toggleClass('active')
  })
})