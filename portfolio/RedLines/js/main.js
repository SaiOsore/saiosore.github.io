"use strict";

//preloader
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
})(); //scroll for Projects Title


var WindowBottom = document.body.scrollHeight;
var projectTitleVar = document.querySelector('.project-title__name');

if (projectTitleVar) {
  var projectTitleHeight = projectTitleVar.offsetWidth;
  var windowHeight = window.innerHeight;
  var projectTitleValue = projectTitleHeight - windowHeight;
}

function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
} //scrollmagic gsap


var animationGsap = function animationGsap() {
  var controller = new ScrollMagic.Controller();
  var aboutBtn = document.querySelector('.AboutBtnJs'),
      aboutSection = document.querySelector('.about'),
      aboutCloseBtn = document.querySelector('.about__close');
  var about = new TimelineMax();
  about.set(aboutSection, {
    yPercent: -100,
    opacity: 0
  });
  aboutBtn.addEventListener('click', function () {
    about.to(aboutSection, 0.8, {
      yPercent: 0,
      opacity: 1
    });
  });
  aboutCloseBtn.addEventListener('click', function () {
    about.to(aboutSection, 0.8, {
      yPercent: -100,
      opacity: 0
    });
  });
  var homeDescr = new TimelineMax();
  homeDescr.to('.home-descr', 1, {
    scale: "2"
  });
  var sceneDescr = new ScrollMagic.Scene({
    triggerElement: '.home',
    triggerHook: 0,
    duration: '100%'
  }).setTween([homeDescr]).addTo(controller);
  var homeVideo = new TimelineMax();
  homeVideo.to('.home-video__box', 1, {
    width: "100vw",
    left: "0",
    height: "100%",
    bottom: "-50vh",
    opacity: "0"
  }, "-=1");
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.home',
    triggerHook: 0,
    duration: '70%'
  }).setTween([homeVideo]).addTo(controller);
  var BigWord1 = new TimelineMax();
  BigWord1.to('.big-text__word--1', 1, {
    y: "-50vh"
  }, "0");
  var sceneBigWord1 = new ScrollMagic.Scene({
    triggerElement: '.home',
    triggerHook: 0,
    duration: '70%'
  }).setTween([BigWord1]).addTo(controller);
  var BigWord2 = new TimelineMax();
  BigWord2.set('.big-text__word--2', {
    opacity: "1"
  }).to('.big-text__word--2', 1, {
    opacity: "0",
    y: "50vh"
  }, "0");
  var sceneBigWord2 = new ScrollMagic.Scene({
    triggerElement: '.home',
    triggerHook: 0,
    duration: '100%'
  }).setTween([BigWord2]).addTo(controller);
  var title1 = new TimelineMax();
  title1.set('.home-projects__title', {
    autoAlpha: "0"
  }).to('.home-projects__title', 1, {
    autoAlpha: "1"
  }, "1");
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.home-projects__title',
    triggerHook: 'onEnter',
    duration: '100%'
  }).setTween(title1).addTo(controller);
  var title2 = new TimelineMax();
  title2.set('.home-last-projects__title', {
    x: "-100%",
    autoAlpha: "0"
  }).to('.home-last-projects__title', 1, {
    x: "0%",
    autoAlpha: "1"
  });
  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.home-last-projects__title',
    triggerHook: 'onEnter',
    duration: '100%'
  }).setTween(title2).addTo(controller);
};

animationGsap(); // window.addEventListener('resize', function() {
//   animationGsap();
// });
//# sourceMappingURL=maps/main.js.map
