$(function(){
	//需求：鼠标放到小图上，大图切换到相应的图片
	$('.picSmall img').each(function(){
		showImg($(this));
	})
	function showImg(ele){
		ele.mouseenter(function(){
			var dataSrc = ele.attr('data-src');
			$('.pic>img').attr('src',dataSrc);
		})
	}
	
})
