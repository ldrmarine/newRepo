$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
});


/*timer*/
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.8,
        "fg_width": 0.045,
        "circle_bg_color": "#DF2E83",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#F2C1CE",
                "show": false
            },
            "Hours": {
                "text": "horas",
                "color": "#F2C1CE",
                "show": true
            },
            "Minutes": {
                "text": "minutos",
                "color": "#F2C1CE",
                "show": true
            },
            "Seconds": {
                "text": "segundos",
                "color": "#F2C1CE",
                "show": true
            }
        }
    });


    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });