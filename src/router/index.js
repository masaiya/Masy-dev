import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import todoMvc from "../components/examples/todoMvc.vue";

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
      path: '/link',
      name: 'link',
      component: markdown.mdLink
    },
    {
      path: '/button',
      name: 'button',
      component: markdown.mdButton
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: markdown.mdDialog
    },
    {
      path: '/radio',
      name: 'radio',
      component: markdown.mdRadio
    },
    {
      path: '/input',
      name: 'input',
      component: markdown.mdInput
    },
    {
      path: '/dropDown',
      name: 'dropDown',
      component: markdown.mdDropDown
    }
  ]
})
