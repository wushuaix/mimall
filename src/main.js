import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import env from './env'

//axios请求全局配置,根据前端的跨域方式做调整:'/a/b'->'/api/a/b':'/a/b'
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
    //全局配置CORS或者JSONP的跨域方式
axios.defaults.baseURL = env.baseURL
    //接口错误拦截
axios.interceptors.response.use(function(response) {
    let result = response
    if (result.status == 0) {
        return result.data
    } else if (result.status == 10) {
        window.href.location = '/#/login'
    } else {
        alert(result.msg)
    }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')