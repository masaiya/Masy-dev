import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import todoMvc from "../components/examples/todoMvc.vue";
import mDialog from "../components/subGroup/mDialog.vue";
import mDropDown from "../components/subGroup/mDropDown.vue";

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
      component: mDialog
    },
    {
      path: '/dropDown',
      name: 'dropDown',
      component: mDropDown
    }
  ]
})
