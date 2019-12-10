"use strict";

(function () {
  var mmBtn = document.querySelector('.menu-mobile-btn'),
      mobileMenu = document.querySelector('.menu-mobile');

  if (mmBtn) {
    mmBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('body-fixed');
    });
  }
})();

(function () {
  window.onscroll = function () {
    var header = document.querySelector('.header--smooth');

    if (header) {
      if (window.pageYOffset > 100) {
        header.classList.add('header--color');
      } else {
        header.classList.remove('header--color');
      }
    }
  };
})();
//# sourceMappingURL=maps/main.js.map
