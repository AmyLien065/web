$(function () {
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
