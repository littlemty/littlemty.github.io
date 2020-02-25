window.onload = function(){
	
	//轮播图部分开始
	//需求：无缝滚动
	//步骤：
	//1.复制第一张图片所在的li，添加到ul的最后面
	//2.给ol中添加li(即span),个数为ul中的li的个数-1，并点亮第一个盒子
	//3.鼠标放在ol的li上点亮盒子+切换图片（即是滑动焦点图）
	//4.设置定时器，让图片及小方块自动向右滑动
	//5.左右切换图片(即是左右焦点图)

	var banner = document.getElementById("banner");
	var adUl = banner.children[0].children[0];
	var banOl = banner.children[1];
	var imgWidth = banner.children[0].offsetWidth;
	var banLR = banner.children[2];

	//1.复制第一张图片所在的li，添加到ul的最后面
	//复制第一个li
	var ulNewLi = adUl.children[0].cloneNode(true);
	//添加到ul中
	adUl.appendChild(ulNewLi);

	//2.给ol中添加li(即span),个数为ul中的li的个数-1，并点亮第一个盒子
	//循环创建4个li
	for(var i = 0; i < adUl.children.length - 1; i++) {
		//为ol创建li
		var olNewLi = document.createElement("li");
		//添加内容
		olNewLi.innerHTML = i + 1;
		//添加到ol中
		banOl.appendChild(olNewLi);
	}
	//点亮第一个盒子
	banOl.children[0].className = "current";

	//3.鼠标放在ol的li上点亮盒子+切换图片（即是滑动焦点图）
	//循环绑定事件
	for(var i = 0; i < banOl.children.length; i++) {
		//定义index模拟图片的索引值
		banOl.children[i].index = i;
		banOl.children[i].addEventListener("mouseenter", function() {
			//点亮盒子（排他思想：和for循环连用）
			for(var j = 0; j < banOl.children.length; j++) {
				banOl.children[j].className = "";
			}
			this.className = "current";
			//鼠标放到小的方块上的时候索引值和key以及square同步
			key = square = this.index;

			//切换图片（移动ul）
			uniAnimate(adUl, -this.index * imgWidth)
		});
	}

	//4.设置定时器，让图片及小方块自动向右滑动
	var timer = null;
	clearInterval(timer);
	timer = setInterval(autoPlay, 1000);

	//定义一个函数，实现图片和小方块自动左右滑动
	//设置两个索引值，一个记录图片，一个记录小方块
	var key = 0; //图片
	var square = 0; //小方块
	function autoPlay() {
		//向右切换图片+点亮盒子
		//切换图片
		key++;
		if(key > banOl.children.length) {
			//图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
			adUl.style.left = 0;
			key = 1;
		}
		uniAnimate(adUl, -key * imgWidth);
		//点亮盒子
		square++;
		//如果square的值大于banOl.children.length-1时，立刻变为0
		if(square > banOl.children.length - 1) {
			square = 0;
		}
		for(var i = 0; i < banOl.children.length; i++) {
			banOl.children[i].className = "";
		}
		banOl.children[square].className = "current";

	}

	//5.左右切换图片(即是左右焦点图)
	//进入盒子.banner显示盒子.arr
	banner.onmouseenter = function (){
		//鼠标进入清楚定时器
		clearInterval(timer);
		banLR.style.display = "block";
	}
	//移开盒子.banner隐藏盒子.arr
	banner.onmouseleave = function (){
		//移开继续
		timer = setInterval(autoPlay, 1000);
		banLR.style.display = "none";
	}
	//点击>
	banLR.children[1].onclick = function (){
		key++;
		if(key > banOl.children.length) {
			//图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
			adUl.style.left = 0;
			key = 1;
		}
		uniAnimate(adUl, -key * imgWidth);
		//点亮盒子
		square++;
		//如果square的值大于banOl.children.length-1时，立刻变为0
		if(square > banOl.children.length - 1) {
			square = 0;
		}
		for(var i = 0; i < banOl.children.length; i++) {
			banOl.children[i].className = "";
		}
		banOl.children[square].className = "current";
	}
	//点击<
	banLR.children[0].onclick = function (){
		key--;
		if(key < 0) {
			//图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
			adUl.style.left = -banOl.children.length * imgWidth + "px";
			key = banOl.children.length-1;
		}
		uniAnimate(adUl, -key * imgWidth);
		//点亮盒子
		square--;
		//如果square的值大于banOl.children.length-1时，立刻变为0
		if(square > banOl.children.length - 1) {
			square = banOl.children.length-1;
		}
		for(var i = 0; i < banOl.children.length; i++) {
			banOl.children[i].className = "";
		}
		banOl.children[square].className = "current";
	}
	
	//轮播图部分结束
	
	
	//左侧菜单栏部分
	//分类切换模块(点击a切换到相应的模块)	排他思想
	var main = document.getElementById('main');
	var aArr = main.children[0].getElementsByTagName('a');
	var flowers = main.children[1].getElementsByClassName('flowers-body');
	
	//循环遍历a,并绑定点击事件
	for (var i = 0; i < aArr.length; i++) {
		aArr[i].index = i;
		aArr[i].onclick = function(){
			//排他思想
			for (var j=0;j<aArr.length;j++) {
				flowers[j].style.display = 'none';
				flowers[this.index].style.display = 'block';
				console.log(this.index)
			}
		}
	}
	
	/**
	 * 匀速动画
	 * @param {Object} ele
	 * @param {Object} target
	 */
	function uniAnimate(ele, target) {
		//要用定时器，先清定时器
		clearInterval(ele.timer);
		//设置定时器
		ele.timer = setInterval(function() {
			//获取步长
			var step = target > ele.offsetLeft ? 10 : -10;
			//获取差值
			var val = target - ele.offsetLeft;
			//赋值(盒子未来的位置=盒子现在的位置+步长)
			ele.style.left = ele.offsetLeft + step + "px";
			//判断(如果目标值与当前值的差值小于步长，则直接跳到目标值)
			if(Math.abs(val) < Math.abs(step)) {
				ele.style.left = target + "px";
				clearInterval(ele.timer);
			}
		}, 5);
	}

	
}

//需求：点击.item跳转到详情页
$(function(){
	$('.item').click(function(){
		$(location).attr('href','itemDetail.html');
	})
})
