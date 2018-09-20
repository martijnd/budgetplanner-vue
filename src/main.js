require('dotenv').config();

const db = require('../Budgetplanner-Server/database')


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

console.log(db)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
