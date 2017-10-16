import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/assets/style/main.scss'

import { ToastPlugin } from 'vux'

Vue.use(Mint)
Vue.use(ToastPlugin)

import tfWrapper from '@/components/public/tf-wrapper'
import tfTopbar from '@/components/public/tf-topbar'
import tfTopbarMenu from '@/components/public/tf-topbar-menu'
import tfHeader from '@/components/public/tf-header'
import tfButton from '@/components/widget/tf-button'

Vue.component(tfWrapper.name, tfWrapper)
Vue.component(tfTopbar.name, tfTopbar)
Vue.component(tfTopbarMenu.name, tfTopbarMenu)
Vue.component(tfHeader.name, tfHeader)
Vue.component(tfButton.name, tfButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})