"use strict";

//about
// (() => {
//   const aboutBtn = document.querySelector('.AboutBtnJs'),
//         aboutSection = document.querySelector('.about'),
//         aboutCloseBtn = document.querySelector('.about__close');
//   if(aboutBtn) {
//     aboutBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       aboutToggle();
//     });
//   }
//   if(aboutCloseBtn) {
//     aboutCloseBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       aboutToggle();
//     });
//   }
//   const aboutToggle = () => {
//     aboutSection.classList.toggle('hidden');
//     document.body.classList.toggle('body-fixed');
//   }
// })();
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
  var aboutBtn = document.querySelector('.AboutBtnJs'),
      aboutSection = document.querySelector('.about'),
      aboutCloseBtn = document.querySelector('.about__close');
  var home1 = new TimelineMax();
  var homeVideo = new TimelineMax();
  var title1 = new TimelineMax();
  var title2 = new TimelineMax();
  var projectTitle = new TimelineMax();
  var about = new TimelineMax();
  var controller = new ScrollMagic.Controller();
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
  home1 //.set('.home-email', {y: "0px"})
  .to('.home-email', 1, {
    y: "-100px"
  }) //.set('.home-descr', {scale: 1, x: "0px", y: "0px"})
  .to('.home-descr', 1, {
    scale: 2,
    x: "-50px",
    y: "100px"
  }, "-=1") //.set('.big-text__word--2', {y: "0px"})
  .to('.big-text__word--2', 1, {
    y: "-400px"
  }, "-=1");
  homeVideo // .set('.home-video__box', {width: "41.66667vw", height: "23.4375vw", bottom: "0vh"})
  .to('.home-video__box', 1, {
    width: "100vw",
    height: "58vw",
    left: "0",
    bottom: "-50vh"
  }, "-=1");
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
  }).setTween(title1).addTo(controller);
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
  }).setTween(title2).addTo(controller); // projectTitle
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

animationGsap();
window.addEventListener('resize', function (event) {
  animationGsap();
});
//# sourceMappingURL=maps/main.js.map
