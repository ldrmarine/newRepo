$(document).ready(function() {
	var $set = $('.pack-items .item');
	$('.pack-items').on('click', '.item', function () {
    	var n=$set.index(this); 
    	var src = $('.pack-items .item:eq('+n+') img').attr('src'); 
    	var product_id = $('.pack-items .item:eq('+n+') input').attr('value'); 
    	$('.cart img.current').attr('src',src);
    	
		var lnk = $('.cart-form').attr('action');
		//lnk=lnk.replace("/product_id=\d+/g","product_id="+product_id);
		var new_link = lnk.replace(/(product_id=).*?(&)/,'$1' + product_id + '$2');
		$('.cart-form').attr('action',new_link);
		
    	$('.add-to-cart a').trigger('click');
	});

	$('#5_pieces_one_price price').html(parseInt(parseInt(cartinfo.prices[5177].AE.price)/5));
    $('#3_pieces_one_price price').html(parseInt(parseInt(cartinfo.prices[5176].AE.price/3)));
    
    $(".add-to-cart").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 700);
    });

});