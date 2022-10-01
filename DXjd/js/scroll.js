$(function(){
		var $obj = $(".jd_miaosha")
		var $tall = $obj.offset().top;
		$(window).scroll(function(){
			var $scroll = $(this).scrollTop();
			if($scroll > $tall){
					$("#scroll").show()
			}else{
					$("#scroll").hide()
				}
			})
			var $left = $(".lj_center")
			var $lefttall = $left.offset().top;
			$(window).scroll(function(){
				var $scroll = $(this).scrollTop();
				if($scroll > $lefttall){
						$(".ce_nav").show()
				}else{
						$(".ce_nav").hide()				
				}
		})

		$(window).resize(function(){
		$(".ce_nav").css({"left":($(window).width()-1190)/2+"px","margin-left":"-34px"});
		}).resize()
})
	function scrollLeft(){
			var stop = document.body.scrollTop || document.documentElement.scrollTop;
			var c = document.getElementById('ccc').getElementsByTagName('ul')[0];
			var $vc = $(c);
			 if(stop>1600 && stop<2400){
			 	$vc.children("li").eq(0).addClass("abc").siblings().removeClass("abc");
			}else if(stop>2400 && stop < 3100){
				$vc.children("li").eq(1).addClass("abc").siblings().removeClass("abc");
			}else if(stop>3100 && stop < 4200){
				$vc.children("li").eq(2).addClass("abc").siblings().removeClass("abc");
			}else if(stop>4200 && stop < 5000){
				$vc.children("li").eq(3).addClass("abc").siblings().removeClass("abc");
			}else if(stop>5000 && stop < 5500){
				$vc.children("li").eq(4).addClass("abc").siblings().removeClass("abc");
			}else if(stop>5500 && stop < 6000){
				$vc.children("li").eq(5).addClass("abc").siblings().removeClass("abc");
			}else if(stop>6000 && stop < 6500){
				$vc.children("li").eq(6).addClass("abc").siblings().removeClass("abc");
			}else if(stop>6500 && stop < 7200){
				$vc.children("li").eq(7).addClass("abc").siblings().removeClass("abc");
			}else if(stop>7200){
				$vc.children("li").eq(8).addClass("abc").siblings().removeClass("abc");
			}
	}
