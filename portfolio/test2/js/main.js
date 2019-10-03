"use strict";

var WindowBottom = document.body.scrollHeight; //about

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


(function () {
  var home1 = new TimelineMax();
  var home2 = new TimelineMax();
  var title1 = new TimelineMax();
  var title2 = new TimelineMax();
  var projectTitle = new TimelineMax();
  var controller = new ScrollMagic.Controller();
  home1.to('.home-email', 1, {
    y: "-100px"
  }).to('.home-descr', 1, {
    scale: 2,
    x: "-50px",
    y: "100px"
  }, "-=1").to('.big-text__word--2', 1, {
    y: "-400px"
  }, "-=1");
  home2.to('.home-video__box', 1, {
    width: "100vw",
    height: "58vw",
    left: "0",
    top: "80vh",
    opacity: "1"
  }, "-=1");
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.home',
    triggerHook: 0,
    duration: '70%'
  }).setTween([home1, home2]) // .addIndicators()
  .addTo(controller);
  title1.set('.home-projects__title', {
    opacity: "0"
  }).to('.home-projects__title', 1, {
    opacity: "1"
  }, "1");
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.home-projects__title',
    triggerHook: 'onEnter',
    duration: '100%'
  }).setTween(title1) // .addIndicators()
  .addTo(controller);
  title2.set('.home-last-projects__title', {
    x: "-100%",
    opacity: "0"
  }).to('.home-last-projects__title', 1, {
    x: "0%",
    opacity: "1"
  });
  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.home-last-projects__title',
    triggerHook: 'onEnter',
    duration: '100%'
  }).setTween(title2) // .addIndicators()
  .addTo(controller);
  projectTitle.from('.project-title__name', 1, {
    y: "0"
  }).to('.project-title__name', 1, {
    y: "\"-".concat(WindowBottom, "px\""),
    opacity: "1"
  });
  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.project-title__name',
    triggerHook: 'onEnter',
    duration: '100%'
  }).setTween(projectTitle) // .addIndicators()
  .addTo(controller);
})();
//# sourceMappingURL=maps/main.js.map
