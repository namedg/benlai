; (function ($) {
    var $loading;
    function loading(method) {
        if($loading && method === "hide"){
            // 让masking隐藏
            $(".maskinger").fadeOut(500,function(){
                $(this).remove()
            })
        }else if(method !== "hide"){
            var html = `<div class="maskinger">
                            <div class="loading">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            `
                if(method && method !== "show"){
                    html+=`<p class="text">${method}</p>`
                }
                
                html+=`</div>`

            $loading = $(html)
            $loading.appendTo("body").fadeIn(500)
        }  
    }

    $.extend({
        loading: loading
    })
}(jQuery))