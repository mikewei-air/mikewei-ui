import Vue from 'vue'
import App from './App.vue'
import MwButton from './components/button.vue'
import './assets/fonts/iconfont.scss'
Vue.config.productionTip = false

Vue.component(MwButton.name, MwButton)
new Vue({
    render: h => h(App)
}).$mount('#app')