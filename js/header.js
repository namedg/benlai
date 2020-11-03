$(function () {

    //选择送至城市
    $(".top .top_left .site").click(function(){
        $(".top .top_left .click_fixed").fadeIn(1000)
    })
    $(".top .top_left .click .close").click(function(){
        $(".top .top_left .click_fixed").fadeOut(1000)
    })

    // 淡入淡出
    var index2 = 0
    var timer2;
    $(".banner .banner-btn .right").click(function () {
        index2++;
        // console.log(index2)
        if (index2 == 3) {
            index2 = 0
        }
        $(".banner img").eq(index2).fadeIn().siblings().fadeOut()
    })

    function autoPlay() {
        timer2 = setInterval(function () {
            $(".banner .banner-btn .right").click()
        }, 2000)
    }
    autoPlay()
})