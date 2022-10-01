// 第一张网页特效
$(function(){
// 大图广告jq
	$("#tops1").toggle(function(){
		$(this).addClass("spanoff")
		$(this).siblings("#topone").show()
		$(this).siblings("#toptwo").hide()
	},function(){
		$(this).removeClass("spanoff").siblings("#topone").hide()
		$(this).siblings("#toptwo").show()
	})
// 更多城市
	$("#city_links1").toggle(function(){
		$(this).removeClass("city_links0").addClass('city_links1').parent().siblings('.allcity').fadeIn(100)
	},function(){
		$(this).removeClass("city_links1").addClass("city_links0").parent().siblings('.allcity').fadeOut(100)
	})
/*第一页导航栏*/
	$("#menudiv").hover(function(){
		$(this).children().siblings("ul").show()
	},function(){
		$(this).children().siblings("ul").hide()
	})

})