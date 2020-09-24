<template>
  <div class="mDropDown">
    <info></info>
  </div>
</template>

<script>
import info from "../../../info.md"
export default {
  name: 'mDropDown',
  data() {
    return {
    };
  },
  components: {
    info
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
@import 'highlight.js/styles/color-brewer.css';
.hljs {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
  }
</style>

