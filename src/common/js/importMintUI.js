import Vue from 'vue'
/*****************引入 vux-ui*****************/
import {
  XImg, Grid, GridItem, XHeader, 
  XButton, AlertPlugin, ConfirmPlugin, ToastPlugin,
  XDialog, Countup, ConfigPlugin
} from 'vux'
Vue.component(XImg.name, XImg);
Vue.component(Grid.name, Grid);
Vue.component(GridItem.name, GridItem);
Vue.component(XHeader.name, XHeader);
Vue.component(XButton.name, XButton);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(ToastPlugin);
Vue.component(XDialog.name, XDialog);
Vue.component(Countup.name, Countup);
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX'
})
// import VueScroller from 'vue-scroller'
// Vue.use(VueScroller)

// import '@/config/rem'//px 转 rem
require('common/css/reset.css')
require('common/css/main.scss')

// FastClick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

export default Vue