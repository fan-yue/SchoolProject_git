$(function(){
		$(".search>input,.int>input,#scroll>div>input,.focus>input").focus(function(){
			if ($(this).val()==this.defaultValue) {
				$(this).val("")
			}
		}).blur(function(){
			if ($(this).val()=="") {
				$(this).val(this.defaultValue)
			}
		})
		
})