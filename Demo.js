	
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

/*----------------------- Media Query ---------------------------*/


//Extra small devices (portrait phones, less than 576px)
@media (max-width: 575px) { ... }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }