$(function(){
	
	//需求：有错误信息则显示，否则隐藏
	//得到所有的错误信息，遍历
	$('.errorClass').each(function(){
		//每个错误信息都调用showError方法
		showError($(this));
	})
	
	
	//需求：注册按钮切换
	//鼠标进入
	$('#submitBtn').on('mouseenter',function(){
		$(this).attr('src','../img/regist2.jpg');
	})
	//鼠标移开
	$('#submitBtn').on('mouseleave',function(){
		$(this).attr('src','../img/regist1.jpg');
	})
	
	
	//需求：当input获取焦点隐藏错误信息
	$('.inputClass').on('focus',function(){
		//获取对应label的id
		var labelId = $(this).attr('id')+'Error';
		//清空label的内容
		$('#'+labelId).text('');
		showError($('#'+labelId));
	})
	
	
	//需求：当input失去焦点时校验
	$('.inputClass').on('blur',function(){
		//获取input的id
		var inputId = $(this).attr('id');
		//获取方法名
		var funName = 'check' + inputId.substring(0,1).toUpperCase() + inputId.substring(1) + '()';
		//调用方法
		eval(funName);
	})
	
	
	
	//定义showError方法
	function showError(ele){
		//获取内容
		var text = ele.text();
		//判断内容是否为空
		if(!text){
			ele.css('display','none');
		}else{
			ele.css('display','');
		}
	}
	
	//校验用户名
	function checkLoginname(){
		var id = 'loginname';
		//获取用户名的value值
		var value = $('#'+id).val();
		//获取label的id
		var labelId = id + 'Error';
		//校验不能为空
		if(!value){
			$('#'+labelId).text('用户名不能为空');
			showError($('#'+id + 'Error'));
			return false;
		}
		//校验长度
		if(value.length<4 || value.length>10){
			$('#'+labelId).text('用户名的长度为4-10');
			showError($('#'+labelId));
			return false;
		}
	}
	
	//校验密码
	function checkLoginpass(){
		var id = 'loginpass';
		//获取密码的value值
		var value = $('#'+id).val();
		//获取label的id
		var labelId = id + 'Error';
		//校验不能为空
		if(!value){
			$('#'+labelId).text('密码不能为空');
			showError($('#'+labelId));
			return false;
		}
		//校验长度
		if(value.length<6 || value.length>16){
			$('#'+labelId).text('密码的长度为6-12');
			showError($('#'+labelId));
			return false;
		}
	}
	
	//校验确认密码
	function checkReloginpass(){
		var id = 'reloginpass';
		//获取确认密码的value值
		var value = $('#'+id).val();
		//获取label的id
		var labelId = id + 'Error';
		//校验不能为空
		if(!value){
			$('#'+labelId).text('确认密码不能为空');
			showError($('#'+labelId));
			return false;
		}
		//校验与密码是否一致
		if(value != $('#loginpass').val()){
			$('#'+labelId).text('两次输入的密码不一致');
			showError($('#'+labelId));
			return false;
		}
	}
	
	//校验邮箱
	function checkEmail(){
		var id = 'email';
		//获取邮箱的value值
		var value = $('#'+id).val();
		//获取label的id
		var labelId = id + 'Error';
		//校验不能为空
		if(!value){
			$('#'+labelId).text('邮箱不能为空');
			showError($('#'+labelId));
			return false;
		}
		//校验邮箱格式
		if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]{2,4})$/.test(value)){
			$('#'+labelId).text('邮箱格式错误');
			showError($('#'+labelId));
			return false;
		}
	}
	
	
	
})
