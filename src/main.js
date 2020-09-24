import Vue from 'vue';
import App from './App.vue';
import router from './router';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

import "../src/assets/styles/common.css"

Vue.config.productionTip = false

import demoBlock from "./components/demo-block"

Vue.component('demo-block', demoBlock);

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
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
