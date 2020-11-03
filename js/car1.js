    //加入购物车
    var proList1
    render()
    $(".shop-banner").click(function (e) {
        var number = $(".num-box input").val()
        number = Number(number)
        var e = e || window.event,
            target = e.target,
            flag = true
        if (target.nodeName == "BUTTON") {
            proList1 = localStorage.getItem("proList1");
            var dataset = target.parentNode.parentNode.dataset
            if (proList1 == null) {
                proList1 = [];
            } else {
                proList1 = JSON.parse(proList1)
                for (var i = 0; i < proList1.length; i++) {
                    if (proList1[i].id == dataset.id) {
                        proList1[i].num += number;
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
                proList1.push(obj)
            }

            localStorage.setItem("proList1", JSON.stringify(proList1))
            render()
        }
    })

    function render() {
        proList1 = JSON.parse(localStorage.getItem("proList1"));
        var str1 = "",
            str2 = "",
            str3 = "",
            count = 0

        if (proList1) {
            for (var i = 0; i < proList1.length; i++) {
                str1 += `
                <dl>
                <dt class="car-box1">
                <div class="tu">
                    <img src="${proList1[i].img}">
                </div>
                <div class="bt">
                    <span>${proList1[i].desc}</span>
                </div>
                <div class="font">
                <i><em>￥</em>${proList1[i].price}</i>
                    <i><em class="font-em">×</em> ${proList1[i].num}</i>
                </div>
                </dt>
                <dt class="car-box2">
                                <div class="one-box">
                                    <div class="yi"></div>
                                    <div class="er">共
                                        <i>${proList1[i].num}</i>
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
                <i class="car-number">${proList1[i].num}</i>
               `
                str3 += `
               <span>${proList1[i].num}</span>
              `
                count += proList1[i].price * proList1[i].num
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