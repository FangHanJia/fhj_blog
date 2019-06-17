/**
 * 移动端&PC端适配
 */
export default {
    adapter: (function (doc, win) {
                var docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function () {
                        var clientWidth = docEl.clientWidth;
                        if (!clientWidth) return;
                        if(clientWidth >= 640){
                            docEl.style.fontSize = '20px';
                        }else{
                            docEl.style.fontSize = 75 * (clientWidth / 750) + 'px';
                        }
                    };

                if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
            })(document, window)
}