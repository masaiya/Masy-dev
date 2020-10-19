import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import todoMvc from "../components/examples/todoMvc.vue";
import totate from "../components/examples/rotate.vue";
import svgForm from "../components/examples/svgForm.vue"
import treeView from "../components/examples/treeView/treeView.vue";

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
      path: '/rotate',
      name: 'rotate',
      component: totate
    },
    {
      path: '/svgForm',
      name: 'svgForm',
      component: svgForm
    },
    {
      path: '/treeView',
      name: '树形视图',
      component: treeView
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
      path: '/select',
      name: 'select',
      component: markdown.mdSelect
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: markdown.mdCascader
    },
    {
      path: '/progress',
      name: 'progress',
      component: markdown.mdProgress
    },
    {
      path: '/dropDown',
      name: 'dropDown',
      component: markdown.mdDropDown
    }, {
      path: '/pagination',
      name: 'pagination',
      component: markdown.mdPagination
    }
  ]
})
