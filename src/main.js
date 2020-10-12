import Vue from 'vue';
import App from './App.vue';
import router from './router';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import "../src/assets/styles/common.css"

import components from "../components";

Vue.config.productionTip = false

for(let i in components) {
  Vue.component(i, components[i] );
}

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
