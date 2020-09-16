<template>
  <div id="app">
    <m-header></m-header>
    <m-side></m-side>
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
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
</style>
