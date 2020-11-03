$(function () {

    // 点击加入购物车-结算换背景
    $(document).on("click", ".details-box4 .addcar", function () {
        $(".rightsidebar .two-box").css({
            "background": "url(../img/结算.gif) no-repeat",
            "backgroundPosition": "-11px 0px",
            "backgroundColor": "#fff"
        })
    })

    $(document).ready(function () {
        var NUM = $(".rightsidebar .two-box span").html()
        if (NUM > 0) {
            $(".rightsidebar .two-box").css({
                "background": "url(../img/结算.gif) no-repeat",
                "backgroundPosition": "-11px 0px",
                "backgroundColor": "#fff"
            })
        }
    })

    //加入购物车
    var proList
    render()
    $(".shop-banner").click(function (e) {
        var number = $(".num-box input").val()
        number = Number(number)
        var e = e || window.event,
            target = e.target,
            flag = true
        if (target.nodeName == "BUTTON") {
            proList = localStorage.getItem("proList");
            var dataset = target.parentNode.parentNode.dataset
            if (proList == null) {
                proList = [];
            } else {
                proList = JSON.parse(proList)
                for (var i = 0; i < proList.length; i++) {
                    if (proList[i].id == dataset.id) {
                        proList[i].num += number;
                        flag = false
                        break
                    }
                }
            }
            if (flag) {
                var obj = {
                    id: dataset.id,
                    img: dataset.img,
                    desc: dataset.desc,
                    price: dataset.price,
                    num: number
                }
                proList.push(obj)
            }

            localStorage.setItem("proList", JSON.stringify(proList))
            render()
        }
    })

    function render() {
        proList = JSON.parse(localStorage.getItem("proList"));
        var str1 = "",
            str2 = "",
            str3 = "",
            count = 0

        if (proList) {
            for (var i = 0; i < proList.length; i++) {
                str1 += `
                <dl>
                <dt class="car-box1">
                <div class="tu">
                    <img src="${proList[i].img}">
                </div>
                <div class="bt">
                    <span>${proList[i].desc}</span>
                </div>
                <div class="font">
                <i><em>￥</em>${proList[i].price}</i>
                    <i><em class="font-em">×</em> ${proList[i].num}</i>
                </div>
                </dt>
                <dt class="car-box2">
                                <div class="one-box">
                                    <div class="yi"></div>
                                    <div class="er">共
                                        <i>${proList[i].num}</i>
                                        件商品</div>
                                        <div class="san">共计 :
                                        <em>￥</em><i></i>
                                        </div>
                                </div>
                                <div class="two-box">
                                    <div class="zuo">此金额尚未计入优惠、折扣部分</div>
                                    <div class="you"><a href="javascript:;">去结算</a></div>
                                </div>
                            </dt>
                </dl>
                `
                str2 += `
                <i class="car-number">${proList[i].num}</i>
               `
                str3 += `
               <span>${proList[i].num}</span>
              `
                count += proList[i].price * proList[i].num
                // console.log(count)
            }
        } else {
            str1 = `<i class="ys">
            购物车中还没有商品，赶紧选购吧！
            </i>`
            str2 = `<i>0</i>`
            str3 = `<span>0</span>`

        }
        $(".car-wrap").html(str1)
        $(".car-num").html(str2)
        $(".rightsidebar .two-box").html(str3)
        $(".car-wrap .car-box2 .san i").html(count)
    }

})