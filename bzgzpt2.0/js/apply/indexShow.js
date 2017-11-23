		$("").ready(function(){
			$('.title-more').click(function(){
				 location.href = "adminCommission.html";
			});


			    //通过遍历给菜单项加上data-index属性
    $(".J_menuItem").each(function (index) {
        if (!$(this).attr('data-index')) {
            $(this).attr('data-index', index);
        }
    });

    function menuItem() {
        // 获取标识数据
        var dataUrl = $(this).attr('href'),
            dataIndex = $(this).data('index'),
            menuName = $(this).attr('title'),
            flag = true;
            // alert(menuName);
        if (dataUrl == undefined || $.trim(dataUrl).length == 0)return false;
        // 选项卡菜单已存在
        
        var tab= $(getParentObj('page-wrapper').getElementsByTagName("nav")[0].getElementsByTagName("div")[0]);
        tab.children('a').each(function () {
            if ($(this).data('id') == dataUrl) {
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active').siblings('.J_menuTab').removeClass('active');
                    scrollToTab(this);
                    // 显示tab对应的内容区
                    getParentObj('page-wrapper').getElementsByClassName("J_mainContent")[0].getElementsByTagName('iframe')[0].src=dataUrl;
            
                    getParentObj('page-wrapper').getElementsByClassName("J_mainContent")[0].getElementsByTagName('iframe')[0].getAttribute('data-id',dataUrl);
                    // $('.J_mainContent .J_iframe').each(function () {
                    //     if ($(this).data('id') == dataUrl) {
                    //         $(this).show().siblings('.J_iframe').hide();
                    //         return false;
                    //     }
                    // });
                }
                flag = false;
                return false;
            }
        });

        // 选项卡菜单不存在
        if (flag) {
            // alert(dataUrl);
            // alert(menuName);
            var str = '<a href="javascript:;" class="active J_menuTab" data-id="' + dataUrl + '">' + menuName + ' <i class="fa fa-times-circle"></i></a>';
            $('.J_menuTab').removeClass('active');
            // getParentObj('page-wrapper').getElementsByTagName("nav")[0].getElementsByClassName('J_menuTab')[0].removeClass('active');
            console.log($(getParentObj('page-wrapper').getElementsByTagName("nav")[0].getElementsByClassName("page-tabs-content")[0]).find('.J_menuTab').removeClass('active'));
            
            // 添加选项卡对应的iframe
            var str1 = '<iframe class="J_iframe" name="iframe' + dataIndex + '" width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataUrl + '" seamless></iframe>';
            
            // $('.J_mainContent').find('iframe.J_iframe').hide().parents('.J_mainContent').append(str1);

            //显示loading提示
//            var loading = layer.load();
//
//            $('.J_mainContent iframe:visible').load(function () {
//                //iframe加载完成后隐藏loading提示
//                layer.close(loading);
//            });
            // 添加选项卡
            window.str = str;
           // alert($("body"));
            


            // $(window.parent).find('.J_menuTabs .page-tabs-content').append(str);
            getParentObj('page-wrapper').getElementsByTagName("nav")[0].getElementsByTagName("div")[0].innerHTML += str;
             getParentObj('page-wrapper').getElementsByClassName("J_mainContent")[0].getElementsByTagName('iframe')[0].src=dataUrl;
            
             getParentObj('page-wrapper').getElementsByClassName("J_mainContent")[0].getElementsByTagName('iframe')[0].getAttribute('data-id',dataUrl);
             // getParentObj('page-wrapper').getElementsByClassName("J_mainContent")[0].innerHTML += str1;
            scrollToTab($('.J_menuTab.active'));
        }
        return false;
    }

function getParentObj(obj){
    return window.parent.document.getElementById(obj); 

}

    $('.J_menuItem').on('click', menuItem);

     function calSumWidth(elements) {
        var width = 0;
        $(elements).each(function () {
            width += $(this).outerWidth(true);
        });
        return width;
    }
function scrollToTab(element) {
        var marginLeftVal = calSumWidth($(element).prevAll()), marginRightVal = calSumWidth($(element).nextAll());
        // 可视区域非tab宽度
        var tabOuterWidth = calSumWidth($(".content-tabs").children().not(".J_menuTabs"));
        //可视区域tab宽度
        var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
        //实际滚动宽度
        var scrollVal = 0;
        if ($(".page-tabs-content").outerWidth() < visibleWidth) {
            scrollVal = 0;
        } else if (marginRightVal <= (visibleWidth - $(element).outerWidth(true) - $(element).next().outerWidth(true))) {
            if ((visibleWidth - $(element).next().outerWidth(true)) > marginRightVal) {
                scrollVal = marginLeftVal;
                var tabElement = element;
                while ((scrollVal - $(tabElement).outerWidth()) > ($(".page-tabs-content").outerWidth() - visibleWidth)) {
                    scrollVal -= $(tabElement).prev().outerWidth();
                    tabElement = $(tabElement).prev();
                }
            }
        } else if (marginLeftVal > (visibleWidth - $(element).outerWidth(true) - $(element).prev().outerWidth(true))) {
            scrollVal = marginLeftVal - $(element).prev().outerWidth(true);
        }
        $('.page-tabs-content').animate({
            marginLeft: 0 - scrollVal + 'px'
        }, "fast");
    }
		});