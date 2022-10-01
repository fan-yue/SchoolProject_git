$(function(){
	var tu=$("#Snav ul li")
	var dian=$("#Sdian span")	
	tu.eq(0).show().siblings().hide()
	var i=$("#Snav ul li:visible").index()

			$("#Sright").click(function(){//点击下一页
				if (!tu.is(":animated")) {i++;}
				if (i==8) {i=0}
					shoudong(tu,dian,i)
			})
			$("#Sleft").click(function(){//点击上一页
				if (!tu.is(":animated")) {i--;}
				if (i==-1) {i=7}
					shoudong(tu,dian,i)

			})
			dian.hover(function(){//鼠标滑过对应的点显示对应的图片
				i=dian.index(this)
				shoudong(tu,dian,i)
			})

			$("#Sheader").hover(function(){
				if(adtime){clearInterval(adtime)}
			},function(){
		//以指定的周期调用函数或计算表达式返回ID值，用作clearInterval()的参数
		adtime=setInterval(function(){
			i++;
			if (i==7) {i=0}
				shoudong(tu,dian,i);
		},2000) 
	}).trigger("mouseleave");

})
function shoudong(tu,dian,i){

	tu.eq(i).stop(true,true).fadeIn(500).siblings().fadeOut(500)
	dian.eq(i).addClass("red").siblings().removeClass()}