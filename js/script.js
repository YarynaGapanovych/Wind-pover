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

})