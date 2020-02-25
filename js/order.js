window.onload = function(){
	//需求：点击li，切换到相应的订单
	var ul = document.getElementById('top-nav');
	var aArr = ul.getElementsByTagName('a');
	var order = document.getElementById('order');
	
	for (var i = 0; i < aArr.length; i++) {
		aArr[i].index = i;
		aArr[i].onclick = function(){
			//排他思想
			for (var j = 0; j < aArr.length; j++) {
				order.children[j].style.display = 'none';
				order.children[this.index].style.display = 'block';
			}
		}
	}
}
