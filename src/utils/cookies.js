import Cookies from 'js-cookie';
export default {
    // 设置cookie
    setCookie(key,value,time){
        if(time){
            return Cookies.set(key,value,{ expires:time });
        }
        return Cookies.set(key,value);
    },
    // 获取cookie
    getCookie(key){
        return Cookies.get(key);
    },
    // 删除cookie
    removeCookie(key){
        return Cookies.remove(key);
    }
}