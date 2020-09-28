<template>
  <div class="mHeaderWrapper">
    <header class="mHeader" ref="mHeader">
      <div class="container">
        <h1>Masy —— some examples</h1>
        <ul class="nav">
          <li class="nav-item">
            <a href="https://github.com/masaiya/Masy-dev" target="_blank">Git</a>
          </li>
          <li class="nav-item">参考文档</li>
          <li class="nav-item">中文</li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'mHeader',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.mHeaderWrapper {
  height: 80px;
  width: 100%;
}
.mHeader {
  height: 80px;
  background-color: #fff;
  color: #fff;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .container {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
  }
  h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: normal;
    line-height: 80px;
  }
  .nav {
    margin-right: 6px;
    height: 100%;
    line-height: 80px;
    background-color: transparent;
    float: right;
    .nav-item {
      list-style: none;
      float:left;
      padding: 0 15px;
      cursor: pointer;
      color: #888888;
      a {
        color: #409EFF;
        text-decoration: none;
        display: block;
      }
      &.active,&:hover {
        color: #409eff;
        
      }
    }
  }
}
</style>
