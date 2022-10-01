$(function(){

	/*最顶部下拉菜单*/
	$("#menu_id").hover(function(){
		$(this).find("ul.menu").show()
		$(this).find(".right_ys3").addClass("ys")
	},function(){
		$(this).find("ul.menu").hide()
		$(this).find(".right_ys3").removeClass("ys")
	})
	$("#menu_id1").hover(function(){
		$(this).find("ul.menu1").show()
		$(this).find(".right_ys3").addClass("ys")
	},function(){
		$(this).find("ul.menu1").hide()
		$(this).find(".right_ys3").removeClass("ys")
	})
	$("#dw_id").hover(function(){
		$(this).find("ul.dw").show()
		$(this).find(".left_ys").addClass("ys")
	},function(){
		$(this).find("ul.dw").hide()
		$(this).find(".left_ys").removeClass("ys")
	})

	/*加入购物车*/
	$(".cart,.large_cart").hover(function(){
		$(".large_cart").show()
		$(".cart").css({"border-bottom":"1px solid #fff"})
		},function(){
		$(".large_cart").hide()
		$(".cart").css({"border-bottom":"1px solid #ccc"})
		})

		$(".ewm,.ewm_last").hover(function(){
		$(".ewm_last").show()
		},function(){
		$(".ewm_last").hide()
	})


	/*tab选项卡*/
	$("#tab_menu").hover(function(){
		$("#tab2").hide()
		$("#tab1").show()
		$("#tab_menu1").removeClass("no")
		$(this).addClass("no")
	},function(){
		$("#tab1").show()
	}).trigger("mouseover")
	$("#tab_menu1").hover(function(){
		$("#tab1").hide()
		$("#tab2").show()
		$("#tab_menu").removeClass("no")
		$(this).addClass("no")		
	},function(){
		$("#tab2").show()
	})


	/*图片的滑动*/
	$(".dongtu").hover(function(){
		$(this).siblings().addClass("dtys")
	},function(){
		$(this).siblings().removeClass("dtys")
	})
	
	$(".find_list_items").hover(function(){
		$(this).siblings().stop(true).animate({position:"absolute",left:"90px"},600)
	},function(){
		$(this).siblings().stop(true).animate({position:"absolute",left:"100px"},600)
	})
	$(".find_list_img").hover(function(){
		$(this).stop(true).animate({position:"absolute",left:"90px"},600)
	},function(){
		$(this).stop(true).animate({position:"absolute",left:"100px"},600)
	})

	$(".left_hover").hover(function(){
		$(this).siblings().stop(true).animate({position:"absolute",right:"0px"},600)
	},function(){
		$(this).siblings().stop(true).animate({position:"absolute",right:"10px"},600)
	})
	$(".right_lj_center_img").hover(function(){
		$(this).stop(true).animate({position:"absolute",right:"0px"},600)
	},function(){
		$(this).stop(true).animate({position:"absolute",right:"10px"},600)
	})


	$(".left_ewm").hover(function(){
		$(this).stop(true).animate({position:"absolute",left:"-10px"},300)
		$(".phone").show()
	},function(){
		$(this).stop(true).animate({position:"absolute",left:"50px"},300)
		$(".phone").hide()
	})


	$('a#diyi').hover(function(){
		$('div.chart_tab div').stop(true).animate({left:"5px"},300)
		$('div.diyi').css("display","block").siblings('.chart_div').css('display','none')
	}).hover();
	$('a#dier').hover(function(){
		$('div.chart_tab div').stop(true).animate({left:"75px"},300)
		$('div.dier').css("display","block").siblings('.chart_div').css('display','none')
	})
	$('a#disan').hover(function(){
		$('div.chart_tab div').stop(true).animate({left:"153px"},300)
		$('div.disan').css("display","block").siblings('.chart_div').css('display','none')
	})
	$('a#disi').hover(function(){
		$('div.chart_tab div').stop(true).animate({left:"230px"},300)
		$('div.disi').css("display","block").siblings('.chart_div').css('display','none')
	})
	$('a#diwu').hover(function(){
		$('div.chart_tab div').stop(true).animate({left:"302px"},300)
		$('div.diwu').css("display","block").siblings('.chart_div').css('display','none')
	})



})