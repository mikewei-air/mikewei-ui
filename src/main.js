import Vue from 'vue'
import App from './App.vue'
import MwButton from './components/button.vue'
import MwDialog from './components/dialog.vue'
import './assets/fonts/iconfont.scss'
Vue.config.productionTip = false

Vue.component(MwButton.name, MwButton)
Vue.component(MwDialog.name, MwDialog)
new Vue({
    render: h => h(App)
}).$mount('#app')