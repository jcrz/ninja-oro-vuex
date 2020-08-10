import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/custom.css'
import activities from './store/activities'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const store = new Vuex.Store({
  modules: {
    activities
  }  
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
