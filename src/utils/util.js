export default{
    getWindowSize() {
        let windowSize = {}
        windowSize.width = window.innerWeight || document.documentElement.clientWidth || document.body.clientWidth
        windowSize.height = window.innerWeight || document.documentElement.clientHeight || document.body.clientHeight
        return windowSize
    },
}