$(function(){
	$("#username").focus(function(){
		var $val = $(this).val("")
	})
	$("#username").blur(function(){
		$(this).val("用户名/邮箱/手机号")
	})
})