export default{
    // 获取窗口尺寸
    getWindowSize() {
        let windowSize = {}
        windowSize.width = window.innerWeight || document.documentElement.clientWidth || document.body.clientWidth
        windowSize.height = window.innerWeight || document.documentElement.clientHeight || document.body.clientHeight
        return windowSize;
    },
    // 格式化整数
    formatNumber(_number){
        let num = parseInt(_number);
        let m = parseInt(num / 60);
        let s = parseInt(num % 60);
        return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }
}