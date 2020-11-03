$(function () {

    // 淡入淡出
    var i = 0;
    setInterval(function () {
        i++;
        if (i > 3) {
            i = 0;
        }
        $(".end-box img").eq(i).fadeIn(1000).siblings().fadeOut(1000)
    }, 1500)

    //放大镜
    $(document).on("mouseover", ".wrap-small ul li", function () {
        $(this).addClass('active').siblings().removeClass('active');
        var thisSrc = $(this).children('img').attr('src');
        $('.wrap-box img').attr('src', thisSrc);
        $('.wrap-big img').attr('src', thisSrc);
    })
    //遮罩移动
    $(document).on("mousemove", ".wrap-box", function (e) {
        wrapBoxDivOffset = $('.wrap-box').offset();
        var x = e.pageX - wrapBoxDivOffset.left - $('.mask').width() / 2;
        var y = e.pageY - wrapBoxDivOffset.top - $('.mask').height() / 2;
        if (x <= 0) {
            x = 0;
        } else if (x >= $('.wrap-box').width() - $('.mask').width()) {
            x = $('.wrap-box').width() - $('.mask').width();
        }
        if (y <= 0) {
            y = 0;
        } else if (y >= $('.wrap-box').height() - $('.mask').height()) {
            y = $('.wrap-box').height() - $('.mask').height();
        }
        $('.mask').css({
            'left': x + 'px',
            'top': y + 'px'
        });
        var percentageX = x / ($('.wrap-box').width() - $('.mask').width());
        var percentageY = y / ($('.wrap-box').height() - $('.mask').height());
        $('.wrap-big img').css({
            left: -percentageX * (1000 - $('.wrap-big').width()),
            top: -percentageY * (1000 - $('.wrap-big').height())
        });
    });
    $(document).on("mouseover", ".wrap-box", function () {
        $(".mask").show()
        $(".wrap-big").show()
    })
    $(document).on("mouseout", ".wrap-box", function () {
        $(".mask").hide()
        $(".wrap-big").hide()
    })

    //分享到-特效
    $(".wrap-bottom .parent").hover(function () {
        $(".wrap-bottom .parent").css("height", 72)
    }, function () {
        $(".wrap-bottom .parent").css("height", 30)
    })

    //加入购物车的个数
    $(".down").click(function () {
        var num = parseFloat($("#input_num").val())
        if (num > 1) {
            num -= 1
            console.log(num)
            $("#input_num").val(num)
        }
    })
    $(".up").click(function () {
        var num = parseFloat($("#input_num").val())
        num += 1
        console.log(num)
        $("#input_num").val(num)
    })

    //清空
    $(".empty").click(function () {
        $(".zuo dd").remove()
    })
    //固定导航
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 824) {
            $(".you-head").css({
                "position": "fixed",
                "border": "none",
                "top": 0,
            })
        } else {
            $(".you-head").css({
                "position": "relative",
                "border": "1px solid #ccc",
                "border-top": "2px solid #8ab700",
            })
        }
    })

    // 元素切换类名
    $(".shop .you .you-head .lf em").hover(function () {
        $(this).children().toggleClass("active")
    })

    $(".shop .you .you-head .lf .fixation").hover(function () {
        $(this).children().addClass("active")
    })

    //右侧导航特效
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $(".rightsidebar .one-box").css("display", "block")
        } else {
            $(".rightsidebar .one-box").css("display", "none")
        }

    })

    //点击回顶部
    $(".rightsidebar .one-box").click(function () {
        $("body,html").animate({
            "scrollTop": 0
        }, 1000)
    })

    //商品详情-楼梯导航
    var flag = true;
    //点击导航，跳转到对应的模块
    $(".you-head .lf").on("click", "a", function () {
        flag = false;
        // 点击a 让当前的a背景发生变化
        $(this).addClass("active").parent().siblings().find("a").removeClass("active")
        var index = $(this).parent().index()
        //利用当前点击的下标,找到对应的块,拿到对应块的偏移量
        var scrollTop = $(".TU").eq(index).offset().top
        $("html,body").animate({
            scrollTop: scrollTop
        }, function () {
            flag = true
        })
    })
    //滚动条滚动，对应的a变化
    $(window).scroll(function () {
        if (flag) {
            $(".TU").each(function (index, ele) {
                if ($(ele).offset().top - $(document).scrollTop() < 100) {
                    $(".you-head .lf em").eq(index).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
                }
            })
        }
    })

})