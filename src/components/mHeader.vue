<template>
  <div id="mHeader">
    <div class="title">Masy —— some examples</div>
    <ul class="nav">
      <li class="gitNav">
        <a href="https://github.com/masaiya/Masy-dev" target="_blank">Git</a>
      </li>
      <li class="docNav">
        参考文档
      </li>
      <li class="langNav">
        中文
      </li>
    </ul>
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

<style scoped>
#mHeader {
  border-bottom: 1px solid#dcdfe6;
  height: 80px;
  line-height: 80px;
}
.title {
  font-size: 32px;
  font-weight: 400;
  color: #333;
  float: left;
  vertical-align: middle;
}
.nav {
  float: right;
  vertical-align: middle;
  margin: 0;
}
.nav li {
  list-style: none;
  float: left;
  padding: 0 15px;
  cursor: pointer;
  color: #888888;
}
.gitNav a{
  text-decoration: none;
  color: #409EFF;
}
</style>
