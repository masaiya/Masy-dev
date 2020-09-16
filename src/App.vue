<template>
  <div id="app">
    <m-header></m-header>
    <m-side class="side"></m-side>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mHeader from "./components/mHeader"
import mSide from "./components/mSide"

export default {
  name: 'App',
  components: {
    mHeader,
    mSide
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
  min-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
.side {
  float: left;
}
#main {
  float: left; 
  padding: 50px 0;
  width: 940px;
  margin-left: 20px;
}
</style>
