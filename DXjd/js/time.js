$(function(){
			var sjc=""
			clearInterval(sjc)
			sjc=setInterval("shijiancha()",1000)
					
})
function shijiancha(){
	var end=$(".xiaoshi").attr("end")
	var date1=new Date();  //开始时间
	var date2=new Date(end.replace(/-/g,"/"));    //结束时间
	var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
	//计算出相差天数
	var days=Math.floor(date3/(24*3600*1000))
	//计算出小时数
	var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
	var hours=Math.floor(date3/(3600*1000))
	//计算相差分钟数
	var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000))
	//计算相差秒数
	var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000)
	$("div.hour span.xiaoshi").text(hours)
	$("div.hour span.fenzhong").text(minutes)
	$("div.hour span.miao").text(seconds)
}



