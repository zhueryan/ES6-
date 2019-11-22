/**
 * 依托JQuery扩展工具JS
 * 
 * 本插件依赖http://t4t5.github.io/sweetalert/ 只为方便只用
 */
jQuery.extend({
	/**
	 * 基础弹出框
	 */
	alert : function(msg) {
		swal(msg)
	},

	/**
	 * 副标题弹出框
	 */
	subTextAlert : function(title, text) {
		swal(title, text);
	},
	/**
	 * 确认框
	 */
	comfirm : function(title, text, callback) {
		swal({
			title : title,
			text : text,
			icon : 'warning',
			buttons: true,
            dangerMode: true,
            buttons: ["取消", "确定"],
		}).then(callback);
		
	},

	/**
	 * 自动隐藏弹出框 2秒
	 */
	alertAutoHide : function(title, text, type) {
		swal({
			title : title,
			text : text,
			icon : type,// success,warning,error
			timer : 2000,
		});
	},
	
	alertByType : function(title, text, type) {
		swal({
			title : title,
			text : text,
			icon : type
		});
	},

	alertWithInput : function(title, text, callback) {
		swal({
			title : title,
			text : text,
			content: "input",
			enableInput : true,
			input:text,
//			buttons: {
//			    cancel: "取消",
//			  }
		}) .then(callback);
	},
	
	showInputError : function(text) {
		swal.showInputError(text);    
	},
	
	alertCallback : function(title, text, callback) {
		swal({
			title : title,
			text : text,
			type : 'warning'
		}, callback);
	},
});
