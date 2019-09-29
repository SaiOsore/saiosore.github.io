"use strict";

//about
$('.header__menu-btn').on('click', function () {
  $('.header-nav').slideToggle('fast', function () {
    if ($(this).css('display') === "none") {
      $(this).removeAttr('style');
    }
  });
  $('.header__menu-btn').toggleClass('header__menu-btn--active');
});
"use strict";
"use strict";

$('document').ready(function () {
  (function () {
    var transEffect = Barba.BaseTransition.extend({
      start: function start() {
        var _this2 = this;

        this.newContainerLoading.then(function (val) {
          return _this2.fadeInNewcontent($(_this2.newContainer));
        });
      },
      fadeInNewcontent: function fadeInNewcontent(nc) {
        nc.hide();

        var _this = this;

        $(this.oldContainer).fadeOut(1000).promise().done(function () {
          nc.css('visibility', 'visible');
          nc.fadeIn(1000, function () {
            _this.done();
          });
        });
      }
    });

    Barba.Pjax.getTransition = function () {
      return transEffect;
    };

    Barba.Dispatcher.on('newPageReady', function () {//reinit plugins
    });
    Barba.Pjax.start();
  })();
});
//# sourceMappingURL=maps/main.js.map
