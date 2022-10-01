var str ="";
var arr = ['UCHA','CEV8','WYXU','H4W6','K4EF','8AMU','V45S']		
function fun11(){
	var img = "";
	str ="";
	for(var i=0;i<1;i++){
		var n =	Math.floor(Math.random()*arr.length);
		str = str+arr[n]//需要对比的文字
		img = img + "<img src='../img/"+n+".jpg'>"//输出到页面中的图片
	}
		div.innerHTML=img
}
