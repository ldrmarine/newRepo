function ajaxSubmitCommentForm(){"use strict";var o={success:function(){$j("#commentform textarea").val(""),$j("#commentform .success p").text("Comment has been sent!")}};$j("#commentform").submit((function(){return $j(this).find('input[type="submit"]').next(".success").remove(),$j(this).find('input[type="submit"]').after('<div class="success"><p></p></div>'),$j(this).ajaxSubmit(o),!1}))}var loading_text,finished_text,piechartcolor,geocoder,map,header_height=100,min_header_height_scroll=57,min_header_height_fixed_hidden=50,min_header_height_sticky=60,scroll_amount_for_sticky=85,content_line_height=60,header_bottom_border_weight=1,scroll_amount_for_fixed_hiding=200,paspartu_width_init=.02,add_for_admin_bar=0,logo_height=130,logo_width=280;function initialize(){"use strict";new google.maps.StyledMapType([{stylers:[{hue:"#324156"},{saturation:"-60"},{lightness:"-20"},{gamma:1.51}]}],{name:"Qode Map"});geocoder=new google.maps.Geocoder;var o={zoom:3,scrollwheel:!1,center:new google.maps.LatLng(-34.397,150.644),zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.RIGHT_CENTER},scaleControl:!1,scaleControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},streetViewControl:!1,streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},panControl:!1,panControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"qode_style"],style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.LEFT_CENTER},mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("map_canvas"),o)}function codeAddress(o){"use strict";if(""!==o){var e='<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>'+o+"</p></div></div>",t=new google.maps.InfoWindow({content:e});geocoder.geocode({address:o},(function(e,n){if(n===google.maps.GeocoderStatus.OK){map.setCenter(e[0].geometry.location);var i=new google.maps.Marker({map:map,position:e[0].geometry.location,icon:"http://ost.agency/wp-content/themes/bridge/img/pin.png",title:o.store_title});google.maps.event.addListener(i,"click",(function(){t.open(map,i)}))}}))}}logo_height=60,logo_width=330,header_top_height=0,loading_text="Loading new posts...",finished_text="No more posts",piechartcolor="#1abc9c";var $j=jQuery.noConflict();function showContactMap(){"use strict";$j("#map_canvas").length>0&&(initialize(),codeAddress(""),codeAddress(""),codeAddress(""),codeAddress(""),codeAddress("Museum of the City of New York, New York, USA"))}$j(document).ready((function(){"use strict";showContactMap()}));var no_ajax_pages=[],qode_root="https://www.ost.agency/",theme_root="https://www.ost.agency/wp-content/themes/bridge/",header_style_admin="light";"undefined"!=typeof no_ajax_obj&&(no_ajax_pages=no_ajax_obj.no_ajax_pages);