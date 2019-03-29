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
    },
    // 格式化UTC日期
    formatUTC(time){
        let formatNum = (num)=>{
            return num = num >= 10? num : ('0' + num);
        }
        let arr = time.split(/[^0-9]/)
        let worldDate = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5])
        let localDate = new Date(worldDate.getTime() + 8 * 60 * 60 * 1000)
        return formatNum(localDate.getFullYear()) + "-"
            + formatNum((localDate.getMonth() + 1)) + "-" 
            + formatNum(localDate.getDate()) + " " 
            + formatNum(localDate.getHours()) + ":" 
            + formatNum(localDate.getMinutes()) + ":" 
            + formatNum(localDate.getSeconds());
    }
}