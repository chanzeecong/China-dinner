$(document).ready(function () {
    $(".mn-menu-bar>li:first-child").addClass("now")
})
$(function () {
    $(".down").mouseenter(function () {
        $(".t-pop-bar").stop().fadeIn();
        }).mouseleave(function () {
        $(".t-pop-bar").stop().fadeOut();
    })

    $(".down1").mouseenter(function () {
        $(".t-pop-food").stop().fadeIn();
        }).mouseleave(function () {
        $(".t-pop-food").stop().fadeOut();
        })
    $(".logo-title").mouseenter(function () {
        $(".pop-type").stop().fadeIn();
        }).mouseleave(function () {
        $(".pop-type").stop().fadeOut()
    })


    $(".mu-down.iconfont").mouseenter(function () {
        $(this).addClass("now").siblings().removeClass("now");
        $(this).children().stop().fadeIn();
        }).mouseleave(function () {
        $(this).removeClass("now")
        $(".mu-b").stop().fadeOut();
    })
    $(".mn-menu-bar>li:first-child").mouseenter(function () {
        $(this).addClass("now").siblings().removeClass("now")
        })
    $(".mn-menu-bar>li:last-child").mouseenter(function () {
        $(this).addClass("now").siblings().removeClass("now")
        }).mouseleave(function () {
        $(this).removeClass("now")
    })



    // /* 中部大型轮播图*/
    var timer;
    $(".carousel-bar1 .dot i").each(function (index)
        {
        this.index =index;
        }).click(function () {
        clearTimeout(timer);
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.swh_content').animate
        ({
            left: -this.index * 748
        },timer11);
    })
    timer11();
    function timer11(){
        timer = setTimeout(function () {
            $(".carousel-bar1 .cur").siblings().triggerHandler('click');
        },2000)
    }


    /*  小图标介绍 */
    $(".xm-list-w224>li").mouseenter(function () {
        $(this).stop().animate({
            top: -10
        }).find('.pop').stop().animate({
            bottom: 0
        })
        })
         $(".xm-list-w224>li").mouseleave(function () {
        $(this).stop().animate({
            top: 0
        }).find('.pop').stop().animate({
            bottom: -120
        })
    })

    /* 排行榜*/
    $('.rank-bar>dd').mouseenter(function ()
    {
        $(this).addClass('show').siblings().removeClass('show');
    })



      // 侧边导航条
    $(".right-popup li").mouseenter(function () {
        $(this).addClass('hover');
        $(this).find('.def-tip').show().stop().animate({
            'opacity': 1, 'right': 48
        }, 200);
        }).mouseleave(function () {
        $(this).removeClass('hover');
        $(this).find('.def-tip').stop().animate({
            'opacity': 0, 'right': 70
        }, 200,function () {
            $(this).hide();
        })
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#go-top").fadeIn();
        }
        else {
            $("#go-top").fadeOut();
        }
        $(".right-popup li:last-child").click(function () {
            $('html,body').stop().animate({scrollTop: 0}, 1000);
            return false
        });
    })
})