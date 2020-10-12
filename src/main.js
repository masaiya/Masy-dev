import Vue from 'vue';
import App from './App.vue';
import router from './router';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

import "../src/assets/styles/common.css"

import components from "../components.json";

Vue.config.productionTip = false

import demoBlock from "./components/demo-block"
Vue.component('demo-block', demoBlock);

import mButton from "./components/subGroup/mButton.vue"
Vue.component('mButton', mButton);
import mRadio from "./components/subGroup/mRadio.vue"
Vue.component('mRadio', mRadio);
import mDialog from "./components/subGroup/mDialog.vue"
Vue.component('mDialog', mDialog);
import mInput from "./components/subGroup/mInput.vue"
Vue.component('mInput', mInput);
import mLink from "./components/subGroup/mLink.vue"
Vue.component('mLink', mLink);
import mDropDown from "./components/subGroup/mDropDown.vue"
Vue.component('mDropDown', mDropDown);





router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
