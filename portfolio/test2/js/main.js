"use strict";

//about
(function () {
  var aboutBtn = document.querySelector('.AboutBtnJs'),
      aboutSection = document.querySelector('.about'),
      aboutCloseBtn = document.querySelector('.about__close');

  if (aboutBtn) {
    aboutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      aboutToggle();
    });
  }

  if (aboutCloseBtn) {
    aboutCloseBtn.addEventListener('click', function (e) {
      e.preventDefault();
      aboutToggle();
    });
  }

  var aboutToggle = function aboutToggle() {
    aboutSection.classList.toggle('hidden');
    document.body.classList.toggle('body-fixed');
  };
})(); //preloader


(function () {
  var preloader = document.querySelector('.preloader');
  setTimeout(document.onload = function () {
    preloader.classList.toggle('hidden');
  }, 2000);
})(); //scrolled btnUp


(function () {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('btnUp--active');
    }

    if (scrolled < coords) {
      goTopBtn.classList.remove('btnUp--active');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 10);
    }
  }

  var goTopBtn = document.querySelector('.btnUp');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})(); //scrollmagic gsap


var tlFirstScroll = new TimelineMax();
tlFirstScroll.set('.home-descr', {
  scale: 1,
  transformOrigin: "center top"
}).to('.home-descr', 3, {
  scale: 2,
  x: "-100px",
  y: "100px"
}).set('.big-text', {
  transformOrigin: "center bottom"
}).to('.big-text', 6, {
  y: "-400px"
}).set('.home-video__box', {
  width: "41.66667vw",
  height: "23.4375vw",
  opacity: "1"
}).to('.home-video__box', 6, {
  width: "100vw",
  height: "50vw",
  left: "0",
  opacity: "0"
});
var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
  triggerElement: '.home',
  triggerHook: 0,
  duration: '100%'
}).setTween(tlFirstScroll).addIndicators().setPin('.home').addTo(controller);
//# sourceMappingURL=maps/main.js.map
