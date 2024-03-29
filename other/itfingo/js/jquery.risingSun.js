/*
-----------------------------------------------------------------
-----------------------------------------------------------------
risingSun 1.0  	jQuery plugin
written by Kiyoshi Honda

Copyright (c) 2015 Kiyoshi Honda (http://hondakiyoshi.com/risingsun )
Released under the MIT license
http://opensource.org/licenses/mit-license.php

Built for jQuery library
http://jquery.com
-----------------------------------------------------------------
-----------------------------------------------------------------
*/
(function($){
	var RS = $.fn.RisingSun = function(options){
		$.fn.RisingSun.initScrollAnime();
		this.each(function(i,elem) {
			var $this = $(elem);
			var Default={
				mode: "school",
				timer: -1,
				duration: 500,
				x: 0,
				y: 0,
				scale: 1.0,
				ease: "linear",
				startPosition: 0.5,
				wipe: false,
				slide: false,
				fadeStart: 0,
				fadeEnd: 1.0,
				popanime: false,
				onWakeup: function(){},
				onComplete: function(){},
				replay: true,
				onReplay: function(){},
				rotate: 0
			};
			var s = $.extend(Default, options);
			if(s.timer==-1){
				s.timer = -9999;
			}else{
				if(s.timer<=0){s.timer=1;}
				s.replay = false;
			}
			if(RS.ignoreBrowser){
				$this.show();
			}else{
				$.fn.RisingSun._setScrollObj($this, s);
			}
		});
	};

	$.extend(RS,{
		scrObj: new Array(),
		startScrollFlag: false,
		ignoreBrowser:false,
		initScrollAnime: function(){
			$(window).scroll(RS.changeScrollAnimeLoop);
			if(!RS._startScrollFlag){
				var userAgent = window.navigator.userAgent.toLowerCase();
				var appVersion = window.navigator.appVersion.toLowerCase();
				if (userAgent.indexOf("msie") != -1) {
					if (appVersion.indexOf("msie 6.") != -1) {
						RS.ignoreBrowser=true;
					} else if (appVersion.indexOf("msie 7.") != -1) {
						RS.ignoreBrowser=true;
					} else if (appVersion.indexOf("msie 8.") != -1) {
						RS.ignoreBrowser=true;
					}
				}
				RS._startScrollFlag=true;
				$(window).scroll(RS.changeScrollAnimeLoop);
			}
		},
		changeScrollAnimeLoop: function(){
			scr=$(window).scrollTop();
			wh=$(window).height();
			RS.scrollObj();
		},	
		_setScrollObj: function(obj, options){
			var as = options.timer || -9999;
			if(options.popanime==true){options.popanime=1.1;}
			if(obj.css("display")=="none"){
				obj.css("opacity",0);
				obj.css("display","block");
			}
			options = $.extend(options, {
				obj: obj,
				oiginaltop: obj.offset().top,
				oiginalleft: obj.offset().left,
				pos: {
					top: obj.position().top,
					left: Number(obj.css('left').match(/[-0-9]+/))
				},
				done: false,
				width: obj.width(),
				height: obj.height(),
				autostart: as
			});

			RS.scrObj.push( options );
			RS.resetObject(RS.scrObj[RS.scrObj.length-1]);
		},
		timerOver: function(e) {
		   RS.animeObjStart(this);
		},
		resetObject: function(obj){
			ratio = obj.height / obj.width;
			sw=obj.width*obj.scale;
			sh=obj.width*ratio*obj.scale;

			obj.obj.css("left",Number(obj.pos.left + obj.x - ((sw-obj.width )>>1) ));
			obj.obj.css("top",Number(obj.pos.top +obj.y - ((sh-obj.height )>>1) ));

			if(!obj.wipe && !obj.slide){
				obj.obj.find("img").each(function (i) {
					if($(this).css("width").match(/[%]/)!="%"){
						imgw=$(this).css("width").match(/[-0-9]+/);
						imgh=$(this).css("height").match(/[-0-9]+/);
						$(this).css("width",100*imgw/obj.width+"%");
						$(this).css("height",100*imgh/obj.height+"%");
					}

				});
				obj.obj.css("width",sw);
				obj.obj.css("height",sh);
			}else{
				switch(obj.wipe || obj.slide){
				case "LR":
					if(obj.slide){
						obj.obj.wrapInner("<div style='float:right;width:"+(obj.width+1)+"px;'></div>");
					}else{
						obj.obj.wrapInner("<div style='width:"+(obj.width+1)+"px;'></div>");
					}
					obj.obj.css("width",0);
					obj.obj.css("overflow","hidden");
					break;
				case "RL":
					if(obj.slide){
						obj.obj.wrapInner("<div style='width:"+(obj.width+1)+"px;'></div>");
					}else{
						obj.obj.wrapInner("<div style='float:right;width:"+(obj.width+1)+"px;'></div>");
					}
					obj.obj.css("width",0);
					obj.obj.css("left",Number(obj.pos.left + obj.x - ((sw-obj.width )>>1) )+obj.width );
					obj.obj.css("overflow","hidden");
					break;
				case "TB":
					if(obj.slide){
						obj.obj.wrapInner("<div style='position:absolute;bottom:0;height:"+(obj.height+1)+"px;'></div>");
					}
					obj.obj.css("width",obj.width);
					obj.obj.css("height",0);
					obj.obj.css("overflow","hidden");
					break;
				case "BT":
					if(obj.slide){
						obj.obj.wrapInner("<div style='height:"+(obj.height+1)+"px;'></div>");
					}else{
						obj.obj.wrapInner("<div style='position:absolute;bottom:0;height:"+(obj.height+1)+"px;'></div>");
					}
					obj.obj.css("top",Number(obj.pos.top +obj.y - ((sh-obj.height )>>1))+obj.height );
					obj.obj.css("height",0);
					obj.obj.css("width",obj.width);
					obj.obj.css("overflow","hidden");
					break;
				}
			}

			obj.obj.stop(false).animate({deg: obj.rotate},{'duration':0});
			obj.obj.css("opacity",obj.fadeStart);
			obj.done=false;
			if(obj.autostart!=-9999){
				obj.done=true;
				setTimeout(RS.timerOver.bind(obj, ''), obj.autostart);
			}
		},
		scrollObj: function(){
			for(var i=0;i<RS.scrObj.length;i++){
				var useScrObj = RS.scrObj[i];
				if(useScrObj.done==false ){
					if(scr > Number(useScrObj.oiginaltop-wh*useScrObj.startPosition + useScrObj.height/2 ) ){
						RS.animeObjStart(useScrObj);
					}
				}else if(useScrObj.replay){
					if(scr+wh < Number(useScrObj.oiginaltop ) ){
						RS.resetObject(useScrObj);
						useScrObj.onReplay();
					}
				}else{
					RS.scrObj.splice(i, 1);
					i--;
				}
			}
		},
		animeObjStart: function(obj) {
			obj.done=true;
			obj.onWakeup();
			if(!obj.popanime){
				obj.obj.stop(false).animate(
				{
					opacity: obj.fadeEnd,
					left:obj.pos.left,
					top:obj.pos.top,
					width: obj.width,
					height: obj.height,
					deg: 0
				},
				{'complete': RS.endAnime.bind(obj, ''),
				'duration':obj.duration,'easing':obj.ease,
				step: function(now) {
					obj.obj.css({transform: 'rotate(' + now + 'deg)'});
				}
			});
			}else{
				obj.obj.stop(false).animate(
				{
					opacity: obj.fadeEnd,
					left:obj.pos.left-((obj.width*obj.popanime-obj.width)>>1),
					top:obj.pos.top-((obj.height*obj.popanime-obj.height)>>1),
					width: obj.width*obj.popanime,
					height: obj.height*obj.popanime
				},
				{'complete': RS.endPopanime.bind(obj, ''),
				'duration':obj.duration*0.7,'easing':obj.ease});
			}
		},
		endAnime: function(e) {
			this.onComplete();
		},
		endPopanime: function(e) {
			this.obj.stop(false).animate(
			{
				opacity: this.fadeEnd,
				left:this.pos.left,
				top:this.pos.top,
				width: this.width,
				height: this.height
			},
			this.duration*0.3,'easeOutCubic');
			this.onComplete();
		},
		pluginExists: function(pluginName){
			return [pluginName] || $.fn[pluginName] ? true : false;
		}
	});
})(jQuery);

