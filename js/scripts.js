(function($){
	"use strict";

	$(document).on('ready', function () {

		/* ==================================================
			Contact Form Validations
		================================================== */
		$('.contact-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){
		
			var action = $(this).attr('action');
		
			$("#message").slideUp(750,function() {
			$('#message').hide();
		
			$('#submit')
				.after('<img src="images/assets/ajax-loader.gif" class="loader" />')
				.attr('disabled','disabled');
		
			$.post(action, {
				name: $('#name').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				comments: $('#comments').val()
			},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('.contact-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
				}
			);
			});
			return false;
		});
		});

		//============= Sticky Menu ============ 
		$("#header").sticky({topSpacing:0});
		//Scrollspy offset
   		$("body").scrollspy({target: ".navbar-collapse", offset:200});

   		//============= Sticky Menu ============ 
   		$('li.smooth-menu a').bind('click', function(event){
		var $anchor = $(this);
		var headerH = '108';
		$('html, body').stop().animate({
		scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
		},1500, 'easeInOutExpo');
		event.preventDefault();
		});

		var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true        // act on asynchronously loaded content (default is true)
		});
		wow.init();

		//============= Parallax section ============ 
		$('.parallax-window').parallax({
		    naturalWidth: 600,
		    naturalHeight: 400
		});

		//============= Portfolio section ============ 
		$('#works-content-items').mixItUp({
			animation: {
				enable: true,
				effects: 'rotateZ scale'		
			}
		});

		//============= Progressbar ============ 

		$('.percent').percentageLoader({
		valElement: 'p',
		strokeWidth: 10,
		bgColor: '#27ae60',
		ringColor: '#2c3e50',
		textColor: '#2C3E50',
		fontSize: '36px',
		fontWeight: '900'
	});

		//============= Gellary Post Section ============
		$("#single-blog-gallery").owlCarousel({
	      navigation : true, // Show next and prev buttons
	      navigationText: [
	        "<i class='fa fa-chevron-left'></i>",
	        "<i class='fa fa-chevron-right'></i>"
	        ],
	      autoPlay : true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      // Navigation
	      pagination : false,
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	  });

		//============= Client Testimonial Section ============
		$("#testimonial-content").owlCarousel({
	      navigation : false, // Show next and prev buttons
	      autoPlay : false,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      // Navigation
	      pagination : true,
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	  });

		/*--------------------------------------------------*/
	    /* Counter
	    /*--------------------------------------------------*/   
	        
	    $('.timer').countTo();
	    $('.counter-item').appear(function() {
	        $('.timer').countTo();
	    },{
	    	accY: -100
	    });    

	    /* Event - Window Load */
		$(window).load(function()
		{		
			/* Loader */
			$("#site-loader").delay(2000).fadeOut("slow");
		});
		/* Event - Window Load /- */

		/* remove the scroll to zoom from maps*/
		$('#google-maps')
		.click(function(){
			$(this).find('iframe').addClass('clicked')})
			.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
		});

})(jQuery);	
