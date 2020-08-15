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

  // router 

  window.onload = function () {
    console.log('Dom has loaded')

    var Router = function (name, routes) {
      return {
        name: name,
        routes: routes
      }
    }


    const myFirstRouter = new Router('myFirstRouter', [
      {
        path: '/',
        name: 'Root'
      },
      {
        path: '/about',
        name: 'About'
      },
      {
        path: '/contact',
        name: 'Contact'
      },
    ])

    const currentPath = window.location.pathname
    console.log(currentPath)

  }

})