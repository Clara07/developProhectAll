/**
 * 工具js 
 */

/**
 * 清除html标签
 */

 String.prototype.stripHTML = function() {
    var reTag = /<(?:.|\s)*?>/g;
    return this.replace(reTag,"");
  }

 
 /**
  * 将form中的值转换为键值对：
  * @param form {string} 表单selector  例如："#uploadform"
  * @returns {} 表单json对象
  */
 function getFormJson(form) {
 	var o = {};
 	var a = $(form).serializeArray();
 	$.each(a, function() {
 		if (o[this.name] !== undefined) {
 			if (!o[this.name].push) {
 				o[this.name] = [ o[this.name] ];
 			}
 			o[this.name].push(this.value || '');
 		} else {
 			o[this.name] = this.value || '';
 		}
 	});
 	return o;
 }