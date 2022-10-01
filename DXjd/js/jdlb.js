 $(function(){
 	var $content = $(".round a");
 	var index = 0;
 	var len = $content.length;
 	$content.hover(function(){
 	index= $content.index(this);
 	showimg(index);
 	}).eq(0).trigger("mouseover");
 	$(".lunbo").hover(function(){
 		if(adtime){clearInterval(adtime)};
 		$(".left_menu,.right_menu").show()
 	},function(){
		$(".left_menu,.right_menu").hide()
		adtime = setInterval(function(){
		index++;
 		if(index==len){index=0;}
 		showimg(index);
 		},2000)
 	}).trigger("mouseleave")
 	$(".left_menu").click(function(){if(index<0){index=7}else{index--}
 		showimg(index)
 	})
 	$(".right_menu").click(function(){if(index=="7"){index=0}else{index++}
 		showimg(index)
 	})
 })
 function showimg(index){
 	var $roll = $(".round a");
 	var $span = $(".round a span")
 	var $href = $roll.eq(index).attr("href");
 	$("#first").attr("href",$href).find("img").stop(true,true).eq(index).fadeIn().siblings().fadeOut();
 	$span.removeClass("now").eq(index).addClass("now")
 }


$(function(){
	var $sup = $(".page1>li");
	var leng = $sup.length;
	var index = 0;
	var adm = null;
	$sup.mouseover(function(){
		index= $sup.index(this)
		fun(index)
	}).eq(0).mouseover();
	//自动轮播
	$(".sup_box,.sup_left,.sup_right").hover(function(){
		if(adm){clearInterval(adm)}
			$(".sup_left,.sup_right").show()
	},function(){
		$(".sup_left,.sup_right").hide();
		adm = setInterval(function(){
			fun(index)
			index++	
			if (index==leng) {index=0}	
		},2000)	
	});
	$(".sup_box").trigger("mouseleave");
	//左右箭头点击
	$("#sup_left").click(function(){
		if(index<0){index=2}else{index--}
		fun(index)
	})
	$("#sup_right").click(function(){if(index==2){index=0}else{index++}
		fun(index)
	})
	
})
	function fun(index){
		$(".sup_master").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
		$(".page1>li").eq(index).css({"background":"red"}).siblings().css({"background":"#c8c8c8"})
	}

 $(function(){
 	
 		var index=0
 		var len = $('.live_dian span').length
 		$('.live_dian span').mouseover(function(){
 			index = $(this).index()
 			zbshow(index)
 		}).eq(0).mouseover()

 		$('.live_img').hover(function(){
 			if(timer){clearInterval(timer)}
 		},function(){
 			timer = setInterval(function(){
 				zbshow(index)
 				index++
 				if(index==len){index=0}
 			},2000)
 		}).trigger('mouseleave')
 		$('.left_jt').click(function(){
 			if(index==0){
 				index=4
			}else{
 				index--
 			}
 			zbshow(index)
 		})
 		$('.right_jt').click(function(){
 			if(index==4){
 				index=0
			}else{
 				index++
 			}
 			zbshow(index)
 		})

 	function zbshow(e){
 		$('div.zhibo').eq(e).fadeIn().siblings().fadeOut()
 		$('.live_dian span').eq(e).css({"background":"red"}).siblings().css({"background":"white"})
 	}
 })





	



