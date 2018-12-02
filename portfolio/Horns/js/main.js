$(document).ready(function(){
	// parallax effect
	$(window).mousemove(function(e) {
    	var change,
			xpos = e.clientX,
			ypos = e.clientY,
			left = change * 10,
			right = change * 10,
			xpos = xpos * 1,
			ypos = ypos * 1;

    	$('.horns').css('margin-top',((0+(ypos/40))+"px"));
    	$('.blackhorns').css('margin-top',((0+(ypos/40))+"px"));  

    	$('.horns').css('margin-right',(( 0+(xpos/65))+"px"));  
    	$('.blackhorns').css('margin-right',(( 0+(xpos/65))+"px"));  

    	$('.horns').css('margin-left',(( 0+(xpos/65))+"px"));  
    	$('.blackhorns').css('margin-left',(( 0+(xpos/65))+"px")); 

    	$('.pictures').css('top',((0+(ypos/50))+"px"));
    	$('.pictures').css('top',((0+(ypos/50))+"px"));           
  	});
});

	//preloader
document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done') ) 
		{
			preloader.classList.add('done');
		}
	}, 1000);
};

	//load-more
$(function() {
  	$('.tour-dates__item').slice(4).hide();
  	$('.load-more').on('click', function(e){
    	e.preventDefault();
    $('.tour-dates__item:hidden').slice(0, 4).slideDown();	   
  });
  	if ( $('.tour-dates__item:hidden').length == 0) {
      	$('.load-more').css('display', 'none');
    };
});

