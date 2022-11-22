// One section scroll add class 
jQuery(window).scroll(function() {
		var scrollDistance = jQuery(window).scrollTop();
        
		jQuery('.filter-section').each(function(i) {
				if (jQuery(this).position().top <= scrollDistance) {
						jQuery('.filter-section.active').removeClass('active-filter');
						jQuery('.filter-section').eq(i).addClass('active-filter');
				}
		});
}).scroll();

//Scroll slider // https://chainn.nl/en
//https://podotti.wpengine.com/retail-services/
 let stickyMainNavLinks = document.querySelectorAll(".main-sticky-link");
        let stickyMainSections = document.querySelectorAll(".main-sticky-section");
        window.addEventListener("scroll", event => {
            let fromTop = window.scrollY;
            var intViewportHeight = window.innerHeight;
            var bannerHeight = jQuery(".who-main-banner-wrap").outerHeight();
            stickyMainNavLinks.forEach(link => {
                let section = document.querySelector(link.hash);
                if (
                    section.offsetTop - (intViewportHeight - bannerHeight - 500) <= fromTop &&
                    section.offsetTop + section.offsetHeight - (intViewportHeight - bannerHeight - 500) > fromTop
                ) {
                    link.classList.add("current");
                    section.classList.add("current");
                } else {
                    link.classList.remove("current");
                    section.classList.remove("current");
                }
            });
        });

//Find the next element jquery
$('li').click(function(){
  active = $('.active').next();
  if(active.length>0){
    $('li').removeClass('active');
    active.addClass('active');
  }
});


// add class on scroll and remove class after few sec
jQuery(window).load(function() {
    setTimeout(function() {
        jQuery('body').addClass('hide-bg');
    },2000);
});

jQuery(window).load(function() {
    jQuery('body').addClass('animated-img');
});


// Section Move up down Jquery
jQuery('#news-post-sec .elementor-post__meta-data:parent').each(function () {
    jQuery(this).insertBefore(jQuery(this).prev('#news-post-sec .elementor-post__title'));
});

	// main menu
jQuery(document).ready(function() {
    jQuery('.toggle-icon').click(function() {
        jQuery('.mega-menu').slideToggle(600);
    });


    jQuery(".toggle-icon").click(function() {
        jQuery(".abc").toggleClass("overlay");
    });


    // For Main  inner Menu
    jQuery(".main-menu h2").click(function() {
        jQuery(this).parent('.main-menu').find('ul').slideToggle();
    });


    /** Top category menu open and close **/
    jQuery("#categorymenu h2").click(function() {
        jQuery('#solutionmenu .menu-section').hide();
        jQuery(this).parent('#categorymenu.menu1').find('.menu-section').slideToggle(600);
    });
    jQuery("#solutionmenu h2").click(function() {
        jQuery('#categorymenu .menu-section').hide();
        jQuery(this).parent('#solutionmenu.menu1').find('.menu-section').slideToggle(600);
    });


    // For font size
    jQuery('#incfont').click(function() {
        if (!jQuery('#incfont').hasClass('increased')) {
            curSize = parseInt($('.inc_drc_fonts').css('font-size')) + 3;
            if (curSize <= 20)
                jQuery('.inc_drc_fonts').css('font-size', curSize);
            jQuery('#incfont').addClass('increased');
        } else {
            curSize = parseInt($('.inc_drc_fonts').css('font-size')) - 3;
            if (curSize <= 15)
                jQuery('.inc_drc_fonts').css('font-size', curSize);
            jQuery('#incfont').removeClass('increased');
        }
    });
    jQuery('#decfont').click(function() {
        curSize = parseInt($('#content').css('font-size')) - 2;
        if (curSize >= 12)
            $('#content').css('font-size', curSize);
    });


    /*** Contact page input box focus ***/
    $(document).on('click focusout', function() {
        $('.gform_wrapper span,.gform_wrapper div').removeClass('focus-color');
    });
    $('.gform_wrapper .gform_body input, .gform_wrapper .gform_body textarea').on('click focus', function(event) {
        $(this).parent().addClass('focus-color');
        event.stopPropagation();
    });


    // Header sticky 
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 500) {
        $('.menu-section').addClass('fixed');
       }
       else {
        $('.menu-section').removeClass('fixed');
       }
    });

    //Auto height set sticky
    var videoheight = $('#home-video-player').height();
    $(window).scroll(function() {
        if ($(window).scrollTop() >=videoheight) {
            $('.home header').addClass('fixed');
        } else {
            $('.home header').removeClass('fixed');
        }
    });

    //add class remove class in multiple item
    $("#donationForm label").on("click", function () {
      $("#donationForm label").removeClass("active_donate");
      $(this).addClass("active_donate");
    });


 	//add class html  using after
    $(".page_item_has_children > a").after("<span class='spanactive'></span>");
		$('.children').hide();
		$('.spanactive').click(function(){
		$(this).next('.children').slideToggle();
	});


	//Radio button toggle
	$('.application .wpcf7-file').hide();
		$('.application .radio_ctm input:radio').click(function() {
			if($(this).val() == 'Yes') {
			$(this).closest('td').prev().find('.wpcf7-form-control-wrap').children().show();
				} else 
			if($(this).val() == 'No') {
			$(this).closest('td').prev().find('.wpcf7-form-control-wrap').children().hide();
		}
	});	
	
});


// Page rediraction add in Function file
document.addEventListener( 'wpcf7mailsent', function( event ) {
    // For the form at https://www.framefreakstudio.com/application/
    if ( 2714 === event.detail.contactFormId ) {
        location = 'https://www.framefreakstudio.com/thanks-app/';
    }
}, false );

// Add Active class in same class
jQuery(document).ready(function($) {
  $('.parent-class ul li').click(function() {
    var index = $(this).index();
    $('.parent-class ul li').removeClass('active');
    $(this).addClass('active');
    $('.test div').removeClass('active');
    $('.test div').eq(index).addClass('active');
  });
})

// hide one by one box when doing screen small
jQuery(window).on('load resize', function() {
    if(jQuery(window).height() < 762) {
        jQuery('#home_section01 .newsblock_black:nth-child(3)').addClass('limit1200');
    }else{
        jQuery('#home_section01 .newsblock_black:nth-child(3)').removeClass('limit1200');
    }

	if(jQuery(window).height() < 602) {
        jQuery('#home_section01 .newsblock_black:nth-child(4)').addClass('limit1200');
    }else{
        jQuery('#home_section01 .newsblock_black:nth-child(4)').removeClass('limit1200');
    }

	if(jQuery(window).height() < 406) {
        jQuery('#home_section01 .newsblock_black:nth-child(2)').addClass('limit1200');
    }else{
        jQuery('#home_section01 .newsblock_black:nth-child(2)').removeClass('limit1200');
    }
})

// In mobile device set section height in alll resolution with hide box [newsblock] is box
jQuery(window).on('load resize', function() {
	var clientWidth = jQuery(window).width();
        if(clientWidth < 768){
		var dheight = jQuery(window).height();
		jQuery('#home_section01').css('height', dheight);

		if(dheight <= 480){
			jQuery('.newsblock_black:nth-child(3)').hide();
			jQuery('.newsblock_black:nth-child(4)').hide();
		}
		if(dheight  >= 481 && dheight <= 666){
			jQuery('.newsblock_black:nth-child(2)').hide();
			jQuery('.newsblock_black:nth-child(4)').hide();
		}
		if(dheight  >= 667 && dheight <= 735){
			jQuery('.newsblock_black:nth-child(2)').hide();
		}
		if(dheight  >= 720 && dheight <= 900){
			jQuery('.newsblock_black:nth-child(2)').hide();
			jQuery('.landingpage_content').addClass('fonts');
			jQuery(".fonts h1").css({"font-size": "30px"});
		}
		if(dheight  >= 720 && dheight <= 900){
			jQuery(".fonts h2").css({"font-size": "23px", "line-height": "26px", "margin-bottom": "5px"});
		}
	}
});


// Add class and remove class when page scrolling
var $animation_elements = $('.quotes_single');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
         $element.addClass('in-view'); }
  } else {
    $element.removeClass('in-view');
  }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$(window).scroll(function(){
	if($(window).scrollTop() >= $("#shopify-cost-tbl").offset().top -100 + $("#shopify-cost-tbl").height() || $(window).scrollTop() < $("#shopify-cost-tbl").offset().top -110)
		$('#shopify-cost-tbl thead').removeClass('fix');
	else
		$('#shopify-cost-tbl thead').addClass('fix');
});
