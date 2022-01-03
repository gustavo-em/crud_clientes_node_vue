
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('bootstrap-4-grid')

//muse
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);


import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
