<template>
  <div id="app">
    <m-header></m-header>
    <m-side class="side" :data="navsData[lang]"></m-side>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navsData from "./nav.config.json"

import mHeader from "./components/mHeader"
import mSide from "./components/mSide"



export default {
  name: 'App',
  components: {
    mHeader,
    mSide
  },
  data() {
    return {
      lang: 'zh-CN',
      navsData
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  max-width: 1200px;
  min-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
.side {
  float: left;
}
#main { 
  padding: 50px 0;
  margin-left: 240px;
}
</style>
