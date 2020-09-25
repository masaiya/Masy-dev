import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import todoMvc from "../components/examples/todoMvc.vue";
import mDropDown from "../components/subGroup/mDropDown.vue";

import markdown from "../docsConfig"

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/todoMvc'
    },
    {
      path: '/todoMvc',
      name: 'todoMvc',
      component: todoMvc
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: markdown.mdDialog
    },
    {
      path: '/dropDown',
      name: 'dropDown',
      component: markdown.mdDropDown
    }
  ]
})
