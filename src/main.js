import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI, {size: "mini"});

axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
