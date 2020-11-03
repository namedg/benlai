$(function () {

    //楼梯导航
    var flag = true;
    $(".nav-content").on("click", ".list", function () {
        flag = false;
        $(this).addClass("activer").siblings().removeClass("activer")
        var index = $(this).index() - 1
        console.log(index)
        var scrollTop = $(".ltdh-content").eq(index).offset().top
        console.log(scrollTop)
        $("html,body").animate({
            scrollTop: scrollTop
        }, function () {
            flag = true
        })
    })

    $(window).scroll(function(){
        if(flag){
            $(".ltdh-content").each(function(index,ele){
                 if ($(ele).offset().top - $(document).scrollTop() < 100) {
                    $(".nav-content .list").eq(index).addClass("activer").siblings().removeClass("activer")
                }
            })
        }
    })

    // 轮播移动
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(".My_banner .My_wrapper").width(375 * $(".My_banner .My_wrapper div").length);

    function f() {
        $(".My_banner .My_wrapper").animate({
            marginLeft: -375
        }, 1000, function () {
            $(".My_banner .My_wrapper").css({
                marginLeft: 0
            });
            $(".My_banner .My_wrapper div:last").after($(".My_banner .My_wrapper div:first"));
        });
    }
    t = setInterval(f, 3000);

    //导航scroll事件
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0 && $(document).scrollTop() < 60) {
            $(".nav-top").css({
                "opacity": .5,
            })
        } else if ($(document).scrollTop() >= 60) {
            $(".nav-top").css({
                "opacity": 1,
            })
            $(".gotop").css({
                "opacity": 1,
            })
        } else {
            $(".nav-top").css({
                "opacity": 0,
            })
            $(".gotop").css({
                "opacity": 0,
            })
        }
    })

    //点击回顶部事件
    $(".gotop").click(function () {
        $("body,html").animate({
            "scrollTop": 0
        }, 1000)
    })

    //点击导航右三点显示菜单事件
    var flager = true
    $(".nav-content .you .rg").click(function () {
        if (flager) {
            $(".menu").show()
            flager = false
        } else {
            $(".menu").hide()
            flager = true
        }
    })

    // 移动端项目完成
})

