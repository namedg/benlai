;
(function() {

    /*
        以750px的宽度的设计图为标准

        动态的设置html 的fontSize 达到缩放的效果
    
    */

    var doc = document.documentElement, // 获取到html元素
        resize = function() {
            var WIDTH = doc.clientWidth,
                fontSize = WIDTH * 100 / 750 * 2 + "px"
            doc.style.fontSize = fontSize
        }
    resize()
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize)

}())