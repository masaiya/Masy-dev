<template>
  <div class="mProgress" :class="['m-progress-'+type, status ? 'is'+status : '']">
    <div class="m-progress-bar">
      <div class="m-progress-outer">
        <div class="m-progress-inner" :style="innerWidthStyle"></div>
      </div>
      <div class="m-progress-text">{{percentage+"%"}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mProgress',
  data() {
    return {
    };
  },
  props: {
    type: {
      type: String,
      default: 'line'
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    status: {
      type: String,
      validator: val => ['success', 'exception', 'warning'].indexOf(val) > -1
    }
  },
  computed:{
    innerWidthStyle() {
      const style = {};
      style.width = this.percentage + '%';
      return style;
    }
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.mProgress {
  position: relative;
  line-height: 1;
  .m-progress-bar {
    width: 100%;
    box-sizing: border-box;
    .m-progress-outer {
      width: 100%;
      height: 6px;
      border-radius: 100px;
      background-color: #ebeef5;
      .m-progress-inner {
        display: inline-block;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 100%;
        background-color: #409eff;
        border-radius: 100px;
        line-height: 1;
        transition: width .6s ease;
        box-sizing: border-box;
      }
    }
  }
  .m-progress-text {
    font-size: 14px;
    color: #606266;
    display: inline-block;
    margin-left: 10px;
    line-height: 1;
    float: right;
    position: relative;
    right: -50px;
    top: -10px;
    text-align: left;
  }
}
.m-progress-line {
  margin-bottom: 15px;
  width: 350px;
  display: block;
}
</style>
