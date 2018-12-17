$(document).ready(function(){

	//Slick Slider
    $('.slider-main__slides').slick({
    	dots: true,
        dotsClass: 'slick-dots slider-dots',
    	arrows: true,
        nextArrow: '.slider-main__next',
        prevArrow: '.slider-main__prev',
    });
    $('.recent-post-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
        nextArrow: '.recent-post-slider__next',
        prevArrow: '.recent-post-slider__prev',
	});

    //menu
    $('.hamburger').on('click', function() {
       $('.nav').slideToggle('fast', function() {
            if( $(this).css('display') === "none") {
                $(this).removeAttr('style');}
        $('.hamburger').toggleClass('is-active');
       });
    });

    //count on scroll
    var show = true,
      counters = $('.counters');
    
    $(window).on("scroll load resize", function(){

      if (!show) return false; 

      var w_top = $(window).scrollTop(),
          e_top = $(counters).offset().top,
          e_height = $(counters).outerHeight(),
          w_height = $(window).height(),
          d_height = $(document).height();

          if (w_top + 500 >= e_top || w_height + w_top == d_height || 
              e_height + e_top < w_height) {

            //counter
            $('.counters__count').each(function() {
              $(this).prop('Counter', 0).animate( {
                Counter: $(this).text() }, 
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

    //search
    $('.form-search').on('click', function() {
        if ( $('.form-search__input').css('display') === "none") 
        {
         $('.form-search__input').css('display', 'inline-block');
        };
    });
});