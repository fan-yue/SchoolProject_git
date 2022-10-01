
$(function(){
// 第二张网页点击显示与隐藏
	$(".Tfoot_hot").toggle(function(){
		$(this).addClass('Tfoot_hota2')
		$(".Trecent").toggle()
	},function(){
		$(this).removeClass('Tfoot_hota2')
		$(".Trecent").toggle()
	})
// 第一张网页点击显示与隐藏
	$(".foot_hot").toggle(function(){
		$(this).addClass('foot_hota1')
		$(".recent").toggle()
	},function(){
		$(this).removeClass('foot_hota1')
		$(".recent").toggle()
	})
// 鼠标滑过显示隐藏内容，划出隐藏内容
 	$(".actImg li").hover(function(){
 		$(this).children().children("div").stop(true,true).fadeIn('slow')
 		$(this).children().children("h3").stop(true,true).slideDown('fast')
 	},function(){
		$(this).children().children("div").stop(true,true).fadeOut('slow')
		$(this).children().children("h3").stop(true,true).slideUp('fast')
 	})
})

$(function(){
/*我的永乐显示与隐藏*/
	$(".login_info_my").hover(function(){
		$(this).children("div.bg").show()
		$(this).children("ul.my_yonele_box").show()
	},function(){
		$(this).children("div.bg").hide()
		$(this).children("ul.my_yonele_box").hide()
	})

/*永乐导航显示与隐藏*/
	$(".guide").hover(function(){
		$(this).children("div.guide-list").show()
	},function(){
		$(this).children("div.guide-list").hide()
	})
/*切换城市显示与隐藏*/
	// $("div.header_w_serach div.floatle a.sidecity").hover(function(){
	// 	$(this).next('ul').css('display','block')
	// })
	$("div.header_w_serach div.floatle").hover(function(){
		$(this).children('ul').css('display','block')
	},function(){
		$(this).children('ul').css('display','none')
	})
/*第一页导航栏显示与隐藏*/
	$("#menudiv0").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
	$("#menudiv1").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
	$("#menudiv2").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
	$("#menudiv3").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
	$("#menudiv4").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
	$("#menudiv5").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
	$("#menudiv6").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
	$("#menudiv7").hover(function(){
		$(this).children().siblings(".outbox").show()
	},function(){
		$(this).children().siblings(".outbox").hide()
	})
/*演唱会*/
	$(".t0").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt1").hide()
		$(".tt2").hide()
		$(".tt0").show()
	})
	$(".t1").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt0").hide()
		$(".tt2").hide()
		$(".tt1").show()
	})
	$(".t2").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt0").hide()
		$(".tt1").hide()
		$(".tt2").show()
	})


/*话剧舞台剧*/
	$(".t01").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt11").hide()
		$(".tt21").hide()
		$(".tt01").show()
	})
	$(".t11").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt01").hide()
		$(".tt21").hide()
		$(".tt11").show()
	})
	$(".t21").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt01").hide()
		$(".tt11").hide()
		$(".tt21").show()
	})




/*音乐舞蹈*/
	$(".t02").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt12").hide()
		$(".tt22").hide()
		$(".tt02").show()
	})
	$(".t12").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt02").hide()
		$(".tt22").hide()
		$(".tt12").show()
	})
	$(".t22").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt02").hide()
		$(".tt12").hide()
		$(".tt22").show()
	})

/*亲子*/
	$(".t03").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt13").hide()
		$(".tt23").hide()
		$(".tt03").show()
	})
	$(".t13").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt03").hide()
		$(".tt23").hide()
		$(".tt13").show()
	})
	$(".t23").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt03").hide()
		$(".tt13").hide()
		$(".tt23").show()
	})

/*体育赛事*/
	$(".t04").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt14").hide()
		$(".tt24").hide()
		$(".tt04").show()
	})
	$(".t14").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt04").hide()
		$(".tt24").hide()
		$(".tt14").show()
	})
	$(".t24").click(function(){
		$(this).siblings().children().removeClass("selected")
		$(this).children().addClass("selected")
		$(".tt04").hide()
		$(".tt14").hide()
		$(".tt24").show()
	})

})


/*积分商城*/
	$(function(){
		$(".rightsidebar").hover(function(){
			$(this).children(".gather").children("li").show()
		},function(){
			$(this).children(".gather").children("li").siblings("#tubiao4").hide()
			$(this).children(".gather").children("li").siblings("#tubiao5").hide()
		})
	})
/*更多城市之前的jq*/
 $(function(){
 	$("#city1").click(function(){
 		$(this).parent().siblings().children().removeClass("redz")
 		$(this).addClass("redz")
 		$("#total0").hide()
 		$("#total2").hide()
 		$("#total3").hide()
 		$("#total4").hide()
 		$("#total1").show()
 	})
 	$("#city0").click(function(){
 		$(this).parent().siblings().children().removeClass("redz")
 		$(this).addClass("redz")
 		$("#total1").hide()
 		$("#total2").hide()
 		$("#total3").hide()
 		$("#total4").hide()
 		$("#total0").show()
 	})
 	$("#city2").click(function(){
 		$(this).parent().siblings().children().removeClass("redz")
 		$(this).addClass("redz")
 		$("#total0").hide()
 		$("#total1").hide()
 		$("#total3").hide()
 		$("#total4").hide()
 		$("#total2").show()
 	})
 	$("#city3").click(function(){
 		$(this).parent().siblings().children().removeClass("redz")
 		$(this).addClass("redz")
 		$("#total0").hide()
 		$("#total1").hide()
 		$("#total2").hide()	
 		$("#total4").hide()
 		$("#total3").show()
 	})
 	$("#city4").click(function(){
 		$(this).parent().siblings().children().removeClass("redz")
 		$(this).addClass("redz")
 		$("#total0").hide()
 		$("#total1").hide()
 		$("#total2").hide()
 		$("#total3").hide()
 		$("#total4").show()
 	}) 

// 获取焦点清除val值
	$(".input1").focus(function(){
		$(this).val(" ")
	})
	$(".input1").blur(function(){
		$(this).val("开心麻花")
	})
 })


 $(function(){
	/*a3的内容*/
	$("#four > .a3").click(function(){
		$(this).addClass("a1")
		$(this).siblings().removeClass("a1")
		$(this).parent(".four").siblings(".liveNav").children(".liveNav3").show().siblings().hide()
	})
	/*a1内容*/ 
	$("#four > .a1").click(function(){
		$(this).addClass("a1")
		$(this).siblings().removeClass("a1")
		$(this).parent(".four").siblings(".liveNav").children(".liveNav1").show().siblings().hide()
	})
	/*a2内容*/
	$("#four > .a2").click(function(){
		$(this).addClass("a1")
		$(this).siblings().removeClass("a1")
		$(this).parent(".four").siblings(".liveNav").children(".liveNav2").show().siblings().hide()
	})
	/*a4内容*/
	$("#four > .a4").click(function(){
		$(this).addClass("a1")
		$(this).siblings().removeClass("a1")
		$(this).parent(".four").siblings(".liveNav").children(".liveNav4").show().siblings().hide()
	})
// 第二张二维码显示
	$(".erweima").hover(function(){
		$(this).siblings().show()
	},function(){
		$(this).siblings().hide()
	})

// 第二张日常场次
	$("#dateone li").click(function(){
		$(this).siblings().removeClass("first")
		$(this).addClass("first")
	})
})