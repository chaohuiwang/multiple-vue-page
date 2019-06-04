(function(doc, win) {
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 750) { //750这个值，根据设计师的psd宽度来修改，是多少就写多少，现在手机端一般是750px的设计稿，如果设计师给的1920的psd，自己用Photoshop等比例缩小
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; //750这个值，根据设计师的psd宽度来修改，是多少就写多少，现在手机端一般是750px的设计稿，如果设计师给的1920的psd，自己用Photoshop等比例缩小
            }
        };

    if (!doc.addEventListener) return;
    //浏览器宽度高度变化的时候
    win.addEventListener(resizeEvt, recalc, false);
    //浏览器开始渲染的时候
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// !function(e,t){function n(){t.body?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);
