( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		}

	} 

	$(document).ready( function() {
		app.init();

		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			 //>=, not <=
			if (scroll > 0) {
				$(".header-wrap").addClass("fh");
			}else{
				$(".header-wrap").removeClass("fh");
			}
		}); 

		$('.hc-contact, .contact-slide-close-btn, .contact-btn').click(function(){
	        $('.contact-slide-wrap').toggleClass('menu-click');
			$('.contact-slide-wrap').toggle("slow");
			$("body").toggleClass("overflow-body");
			
	        return false;
		});

		$('.slideshow-link a, .inquire-link a').click(function(e){
			e.preventDefault();
			$("html, body").animate({ 
			  scrollTop: $('.footer-wrap').offset().top - 50
			}, "slow"); 
		}) 

		
		jQuery('.bldg-details-item-label').hover(function() {
			jQuery('#' + jQuery(this).attr('data-id')).css('opacity','1');
			
		}, function() {
			jQuery('#' + jQuery(this).attr('data-id')).css('opacity','0');       
		});

		$('.mobile-menu').click(function(e){
			e.preventDefault();
				$('.mobile-nav-wrap').slideToggle("slow");
			});
		
		
		// jQuery.fn.extend({
		// 	toggleText: function (a, b){
		// 		var isClicked = false;
		// 		var that = this;
		// 		this.click(function (){
		// 			if (isClicked) { that.text(a); isClicked = false; }
		// 			else { that.text(b); isClicked = true; }
		// 		});
		// 		return this;
		// 	}
		// });
		
		// $('.hc-contact').toggleText("Leasing Inquiries", "Close");

		// window.onscroll = function(ev)
		// {
		// var B= document.body; //IE 'quirks'
		// 	var D= document.documentElement; //IE with doctype
		// 	D= (D.clientHeight)? D: B;

		// if (D.scrollTop == 0)
		// 	{
		// 		alert("top");
				
		// 	}        
		// };

		// if(!$(window).scrollTop()) { //abuse 0 == false :)
		// 	alert("You are at the top of this window");
		//   }
   
		

	});

	$(window).load(function () { 

	});

	$(window).resize(function () { 

	});
	
})(jQuery);


