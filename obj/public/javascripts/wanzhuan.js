$(function(){
	$('.sgw_img dt').hover(function(){
		$(this).children('.box').stop(true,true).delay(100).animate({'top':0,opacity:0.8},300);
	},function(){
		$(this).children('.box').stop(true,true).animate({'top':-450,opacity:0},200);
	})
	$('.sgw_img dd').hover(function(){
		$(this).children('.box').stop(true,true).delay(100).animate({'top':0,opacity:0.8},300);
	},function(){
		$(this).children('.box').stop(true,true).animate({'top':-350,opacity:0},200);
	})
})