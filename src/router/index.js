import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import content from '@/components/content/content'

Vue.use(Router)
Vue.use(MintUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    }
  ]
})
