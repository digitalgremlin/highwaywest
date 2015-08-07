'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
            //$(document).foundation();
			 $(document).foundation({
                orbit: {
                animation: 'slide',
                timer_speed: 4000,
                animation_speed: 400,
                //stack_on_small: false,
                navigation_arrows: false,
                slide_number: false,
                pause_on_hover: false,
                resume_on_mouseout: false,
                bullets: false,
                timer: true,
                variable_height: false,
                }
              });
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
            
            $(document).ready(function(){
                // randomize home-page hero images
                var images = ['hero_1.jpg', 'smores.jpg', 'quote-bg.jpg']; 
                $('.featured').css({'background-image': 'url(../../images/' + images[Math.floor(Math.random() * images.length)] + ')'});
                // slick-slider init functions
                  $('.slick-slide-block').slick({
                      slidesToShow: 1,                  
                      arrows: false,
                      slidesToScroll: 1,
                      autoplay: true,
                      adaptiveHeight: true,
                      infinite: true,
                      autoplaySpeed: 4000,
                      asNavFor: '.slider-nav'
                  });
           
                $('.slider-nav').slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  asNavFor: '.slick-slide-block',
                  dots: false,
                  centerMode: true,
                  focusOnSelect: true
                });
                
                $('.slick-slide-block-2').slick({
                      slidesToShow: 1,                  
                      arrows: false,
                      slidesToScroll: 1,
                      autoplay: true,
                      adaptiveHeight: true,
                      infinite: true,
                      autoplaySpeed: 4000
                      
                  });
                // scroll reveal animation for property check-in form*               
                //window and device variables
            (function() {
                var $window           = $(window);
                    
                  //win_height_padded = $window.height() * 1.1,
                  //isTouch           = Modernizr.touch;
                
                //if (isTouch) { $('.checkme-block').addClass('checkscroll'); }                
                    //revealOnScroll function -- ToDo: figure out win_height_padding values
                  var revealOnScroll = function() { 
                         //console.log('onscroll called');
                      var scrolled = $window.scrollTop();
                       // win_height_padded = $window.height() * 1.1;
                     // Showed...
                        $('.checkme-block:not(.checkscroll), form .columns:not(.checkscroll)').each(function () {
                          var $this = $(this);

                          if (scrolled  > 600) {                             
                            if ($this.data('timeout')) {
                              window.setTimeout(function(){                               
                                $this.addClass('checkscroll');
                              }, parseInt($this.data('timeout'),10));
                            } else {
                              $this.addClass('checkscroll ' + $this.data('animation'));                            
                                  
                            }
                          }
                        });
                       
                           // Hidden...
                           $('.checkme-block.checkscroll, form.availability-widget.columns.checkscroll').each(function () {                             
                              //var $this     = $(this);
                              if (scrolled  < 600) {
                                $(this).removeClass('checkscroll');
                              }
                            });
                          };                 
                // revealScroll function magic
                if( $('div').hasClass('availability-block')) { //conditional handle                   
                    $window.on('scroll', revealOnScroll);
                    //console.log('check condition passed');                    
                    
                    } 
                    
                })();
         
                // toggle for property-maps widget
                    $('.toggle-block').find('a').click(function() {
                        //console.log('Ima togglin dog!');
                         $('.toggle-block').find('a').toggleClass('yellow-btn yellow-btn-alt');
                         $('.toggle-content').toggleClass('google-map sitemap');
                        });
                             
                
             });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
