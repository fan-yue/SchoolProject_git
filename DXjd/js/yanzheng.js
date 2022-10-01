function yz(name,check){
		var obj = document.getElementsByName(name)[0]
		$(".int p").click(function(){
			$(this).siblings("input").focus()
		})
		obj.onfocus=function(){
			$(this).siblings('p.name').hide()
			$(this).siblings('span.gray').show()
		}
		obj.onblur=function(){
			info = check(this.value)
			if(info){
				$(this).siblings('i').show()
				$(this).siblings('span.gray').remove()
				$(this).siblings('span.red').hide()
			}else{
				$(this).siblings('span.red').show()
				$(this).siblings('i').hide()
				$(this).siblings('span.gray').hide()
				$(this).siblings('p.name').show()
				$(this).siblings('span.gray').remove()
			}
		}
		if(rclick=="click")
			obj.onblur()
	}
	window.onload = validate
	function validate(ccc){
		if(ccc)
			rclick = ccc
		fg = true
		//用户名
		yz("username",function(val){
			info = false
			if(val.length>=4 && val.length<=20){
				info = true
			}else{
				fg = false
			}
			return info
		})
		//密码
		yz("password",function(val){
			info = false
			if(val.length>=6 && val.length<=20){
				info = true
			}else{
				fg = false
			}
			return info
		})
		//确认密码
		yz("apassword",function(val){
			info = false
			var pwd = document.getElementsByName('password')[0]
			if(val==pwd.value && val.length>=6 && val.length<=20){
				info = true
			}else{
				fg = false
			}
			return info
		})
		//中国移动
		yz("china",function(val){
			info = false
			if(val.length==11){
				info = true
			}else{
				fg = false
			}
			return info
		})
		//验证码
		yz("yzm",function(val){
			info = false
			if(val!==""){
				info = true
			}else{
				fg = false
			}
			return info
		})
		//手机验证码
		yz("phone",function(val){
			info = false
			if(val!==""){
				info = true
			}else{
				fg = false
			}
			return info
		})
		$(".button").click(function(){
		var $val = $("form :input").val()
		if($val==""){
			$("#username").focus()
			$("#username").siblings('span.red').show()
			$("#username").siblings('span.gray').remove()
			return false
		}else{
			alert("注册成功")
			return true
		}
	})
	}
	


