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
})(); //scroll


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
  var home1 = new TimelineMax();
  var homeVideo = new TimelineMax();
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
  homeVideo; // .to('.home-video__box', 1, {width: "100vw", height: "58vw", left: "0", top: "50vh", autoAlpha: "1"}, "-=1")

  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.home',
    triggerHook: 0,
    duration: '70%'
  }).setTween([home1, homeVideo]) // .addIndicators()
  .addTo(controller);
  title1.set('.home-projects__title', {
    autoAlpha: "0"
  }).to('.home-projects__title', 1, {
    autoAlpha: "1"
  }, "1");
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.home-projects__title',
    triggerHook: 'onEnter',
    duration: '100%'
  }).setTween(title1) // .addIndicators()
  .addTo(controller);
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
  }).setTween(title2) // .addIndicators()
  .addTo(controller); // projectTitle
  // .to('.project-title__box', 1, {top: "66", opacity: "1"})
  // const scene4 = new ScrollMagic.Scene({
  //   triggerElement: '.project-title__box',
  //   triggerHook: 0,
  //   duration: '100%'
  // })
  // .setTween(projectTitle)
  // // .addIndicators()
  // .addTo(controller);
};

window.addEventListener('resize', function (event) {
  animationGsap();
});
animationGsap();
//# sourceMappingURL=maps/main.js.map
