$(document).ready(function() {
    $(".tag-operate li").click(function () {
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(".wgt-reply-qts-list-wp").hide().eq(index).show();
    });

});
