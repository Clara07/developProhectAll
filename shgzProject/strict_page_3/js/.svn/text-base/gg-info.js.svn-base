/*used for the page of personal Information author:Clara*/
$(function() {
	bindDatePicker('#c', '#t');
	bindDatePicker('#df', '#tf');
	bindDatePicker('#f4df', '#f4tf');
	 var tab_wp2 = $('.tab_wp2 li'),
            	forms = $('.gg-forms'),
            	cpObj = $('#cp'),
            	cpHtml = $('.cp');
            
	//控制tab页的展示
    tab_wp2.click(function(){
    	forms.hide();
    	forms.eq($(this).index()).show();
    });
	//格式化时间
	$('.tm').fdatepicker({
		format: 'yyyy-mm-dd'
	});

	$('.ctm').fdatepicker({
		format: 'yyyy-mm-dd'
	});

	cpObj.click(function() {
		if(!this.flg) {
			this.flg = 1;
		}
		var tmp = cpHtml.html();
		tmp = tmp.replace(/name="(.*?)"/gmi, "name=\"$1" + this.flg + "\"");
		tmp = tmp.replace(/id="(.*?)"/gmi, "id=\"$1" + this.flg + "\"");
		$(this).parent().parent().before('<tr><td colspan="8"><div class="gg-moreForm">' + tmp + '</div></td></tr>');
		bindDatePicker('#c' + this.flg, '#t' + this.flg);
		this.flg++;
		//console.log(tmp);
	});
});

function bindDatePicker(p1, p2) {
	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	var checkin = $(p1).fdatepicker({
		format:   'yyyy-mm-dd',
		onRender: function(date) {
			return date.valueOf() < now.valueOf() ? 'disabled' : '';
		}
	}).on('changeDate', function(ev) {
		if(ev.date.valueOf() > checkout.date.valueOf()) {
			var newDate = new Date(ev.date)
			newDate.setDate(newDate.getDate() + 1);
			checkout.update(newDate);
		}
		checkin.hide();
		$(p2)[0].focus();
	}).data('datepicker');
	var checkout = $(p2).fdatepicker({
		format:   'yyyy-mm-dd',
		onRender: function(date) {
			return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
		}
	}).on('changeDate', function(ev) {
		checkout.hide();
	}).data('datepicker');
}

// add form
$(function() {

	$('.fmcpbtns').each(function() {
		var fmcpbtns = $(this),
			cpTpl = fmcpbtns.parent().prev(),
			cpTplHtml = cpTpl.html();
		fmcpbtns.click(function() {
			var _this = $(this);
			if(!this.flg) {
				this.flg = 1;
			}
			if(!this.tab) {
				this.tab = _this.attr('tab').split('-');
			}

			var tmp = cpTplHtml.replace(/name="(.*?)"/gmi, "name=\"$1" + this.flg + "\"");
			tmp = tmp.replace(/id="(.*?)"/gmi, "id=\"$1" + this.flg + "\"");
			tmp = tmp.replace(/ctm/gmi, "ctm" + this.flg);

			_this.parent().before('<div class="mb">' + tmp + '</div>');
			_this.parent().prev().find("input,select,textarea").removeAttr("disabled");

			bindDatePicker('#' + this.tab[0] + this.flg, '#' + this.tab[1] + this.flg);

			$('.ctm' + this.flg).fdatepicker({
				format: 'yyyy-mm-dd'
			});
			this.flg++;
		});
	});

	$('.upfile').change(function() {
		previewImage(this);
	});
});

//图片上传预览    IE是用了滤镜。
function previewImage(file) {
	try {
		var MAXWIDTH = 90;
		var MAXHEIGHT = 90;
		// var div = document.getElementById('preview');
		if(file.files && file.files[0]) {
			// div.innerHTML ='<img id=imghead onclick=$("#previewImg").click()>';
			var img = $(file).next().find('img')[0];
			img.onload = function() {
				var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
				img.width = rect.width;
				img.height = rect.height;
				//              img.style.marginLeft = rect.left+'px';
				img.style.marginTop = rect.top / 2 + 'px';
			}
			var reader = new FileReader();
			reader.onload = function(evt) {
				img.src = evt.target.result;
			}
			reader.readAsDataURL(file.files[0]);
		} else //兼容IE
		{
			var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
			file.select();
			var src = document.selection.createRange().text;
			// div.innerHTML = '<img id=imghead>';
			var img = $(file).next().find('img')[0];
			img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
			// div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
		}
	} catch(e) {

	}
}

function clacImgZoomParam(maxWidth, maxHeight, width, height) {
	var param = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};
	if(width > maxWidth || height > maxHeight) {
		rateWidth = width / maxWidth;
		rateHeight = height / maxHeight;

		if(rateWidth > rateHeight) {
			param.width = maxWidth;
			param.height = Math.round(height / rateWidth);
		} else {
			param.width = Math.round(width / rateHeight);
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}