$(function () {

    //漢堡按鈕
    $('.hamburger').click(function () {
        //  切換 三 & X
        $(this).toggleClass('is-active');

        // 切換 顯示 & 隱藏
        $('.navigation').toggleClass('show');
    });

    // 捲動至指定區段
    $(".menu a").click(function () {
        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    // go top
    $("#goTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    // 淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#goTop").stop().fadeTo("fast", 1);
        } else {
            $("#goTop").stop().fadeOut("fast");
        }
    });

});

// smoove共用預設值
$('.smoove').smoove({
    offset: 300 //離底部多遠載入，可以自己決定值
});
