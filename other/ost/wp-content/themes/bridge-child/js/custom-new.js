var $j=jQuery.noConflict();$j(document).ready(function(){$j('#returnback').on("click",function(){window.history.back();});
	$j(".portfolio_main_holder article.mix").last().addClass("lasta");$j('#menu-top_menu .menu-item').each(function(index){$j(this).prepend('<div class="popupMenuItems"></div>');});"use strict";$j('footer .footer_top_holder').on('click',animateFooter);});function animateFooter(e){var nextPageLink=$j(this).attr('data-page-link');var speed=500;var windowHeight=$j(window).height();var windowWidth=$j(window).width();$j('footer.uncover').addClass('push-now').velocity({paddingBottom:windowHeight-645},300);$j('.uncover.push-now .footer_top_holder').velocity({height:645},300);setTimeout(function(){document.location.href=nextPageLink;},1000);}
$j('.popup_menu').click(function(e){if($j(this).hasClass("opened")){$j('html, body').removeAttr('style')}
else{$j('html, body').width($j('html').width());}})
$j(window).scroll(function(){if($j(this).scrollTop()>645){$j('.tablinks').removeClass("sticky");$j('.tablinks').addClass("sticky");}
else{$j('.tablinks').removeClass("sticky");}});

$j('body').on('change', '#country', function() {
	//alert (country_state_ajax_url);
	$j.ajax({
		type: "post",
		dataType: "text",
		url: country_state_object.country_state_ajax_url,
		data: {action: "get_country_state",country_name:jQuery('#country').val()},
		success: function(msg){
			jQuery('#state').html(msg)
		}
	});
} );

jQuery(function(){
	
	//jQuery(".pointparallax").pointparallax();

	jQuery("#top_left").RisingSun({duration:300,scale:0.1,rotate:-90,x:-50,y:-100,ease:"easeOutCubic",startPosition:0.9});

	jQuery("#top_right").RisingSun({duration:500,scale:0.1,rotate:-90,x:50,y:-100,ease:"easeOutCubic",startPosition:0.9});

	jQuery("#bottom_left").RisingSun({duration:700,scale:0.1,rotate:-90,x:-50,y:100,ease:"easeOutCubic",startPosition:0.9});

	jQuery("#bottom_right").RisingSun({duration:900,scale:0.1,rotate:-90,x:50,y:100,ease:"easeOutCubic",startPosition:0.9});

	jQuery("#readmore01").RisingSun({
		duration:800,scale:0.1,startPosition:0.7,ease:"easeOutCubic"
	});

	jQuery("#clutch").RisingSun({
		duration:1200,slide:"BT",startPosition:0.7,ease:"easeOutCubic"
	});

});