$((function(){$("a[href^='#']").click((function(){var t=$(this).attr("href");return $("html, body").animate({scrollTop:$(t).offset().top-60+"px"}),!1}))}));