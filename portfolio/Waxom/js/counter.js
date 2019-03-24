//count on scroll
let show = true,
    counters = $('.counters');

$(window).on("scroll load resize", function(){

  if (!show) return false; 

  let w_top = $(window).scrollTop(),
      e_top = $(counters).offset().top,
      e_height = $(counters).outerHeight(),
      w_height = $(window).height(),
      d_height = $(document).height();

  if (w_top + 500 >= e_top || w_height + w_top == d_height || 
      e_height + e_top < w_height) {

  //counter
  $('.counters__count').each(function() {
    $(this).prop('Counter', 0).animate( {
      Counter: $(this).text() 
    }, 
      {
      duration: 2000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  show = false;
  }
});