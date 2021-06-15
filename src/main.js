import Vue from 'vue'
import App from './App.vue'
import MwButton from './components/button.vue'
import MwDialog from './components/dialog.vue'
import MwInput from './components/input.vue'
import MwSwitch from './components/switch.vue'
import MwRadio from './components/radio.vue'
import MwRadioGroup from './components/radio-group.vue'
import './assets/fonts/iconfont.scss'
Vue.config.productionTip = false

Vue.component(MwButton.name, MwButton)
Vue.component(MwDialog.name, MwDialog)
Vue.component(MwInput.name, MwInput)
Vue.component(MwSwitch.name, MwSwitch)
Vue.component(MwRadio.name, MwRadio)
Vue.component(MwRadioGroup.name, MwRadioGroup)
new Vue({
    render: h => h(App)
}).$mount('#app')