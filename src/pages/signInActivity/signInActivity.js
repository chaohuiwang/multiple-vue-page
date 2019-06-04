// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'common/js/importMintUI.js'
import App from './signInActivity.vue'
// import router from './router'

Vue.config.productionTip = false
new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
