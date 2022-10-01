$(function(){
	$("#submit").click(function(){
		var $yh=$("#username").val()
		var $mm=$("#pwd").val()
		if ($yh==""||$mm=="") {
			$("#username").focus()
			$(".focus").css({"border":"1px solid #bdbdbd"})
			$(".focus>span").show()
			$("#focus").css({"border":"1px solid red"})
			return false
		}else{
			$("#focus").css({"border":"1px solid #bdbdbd"})
			return true
		}
	});
	$("#username").focus(function(){

		$(".focus>span").hide()
		$(".focus").css({"border":"1px solid red"})
		$("#focus").css({"border":"1px solid #bdbdbd"})
	})
	$("#pwd").focus(function(){
		$(".focus>span").hide()
		$(".focus").css({"border":"1px solid #bdbdbd"})
		$("#focus").css({"border":"1px solid red"})
	})

})