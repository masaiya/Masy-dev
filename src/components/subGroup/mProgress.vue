<template>
  <div class="mProgress" :class="['m-progress-'+type, status ? 'is-'+status : '']">
    <div class="m-progress-bar">
      <div class="m-progress-outer" :style="strokeHeight">
        <div class="m-progress-inner" :style="innerWidthStyle">
          <div class="m-progree-innerText" v-if="textInside">{{percentage+"%"}}</div>
        </div>
      </div>
      <div class="m-progress-text" v-if="!textInside">
        <template v-if="!status">{{percentage+"%"}}</template>
        <i v-else :class="iconClass"></i>
      </div>
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
    },
    height: {
      type: Number,
      default: 6
    },
    textInside: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    innerWidthStyle() {
      const style = {};
      style.width = this.percentage + '%';
      return style;
    },
    iconClass() {
      if(this.status === 'warning') 
        return 'm-icon-warning';
      else if(this.status === 'success') 
        return 'm-icon-circle-check';
      else 
        return 'm-icon-circle-close';
    },
    strokeHeight() {
      const style = {};
      style.height = this.height + 'px';
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
    margin-bottom: 20px;
    .m-progress-outer {
      width: 100%;
      border-radius: 100px;
      background-color: #ebeef5;
      .m-progress-inner {
        display: inline-block;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 100%;
        border-radius: 100px;
        line-height: 1;
        transition: width .6s ease;
        box-sizing: border-box;
        .m-progree-innerText {
          display: inline-block;
          margin: 0 5px;
          vertical-align: middle;
          font-size: 12px;
          color: #fff;
          position: absolute;
          right: 0;
          top: 25%;
        }
      }
    }
  }
  .m-progress-text {
    width: 40px;
    font-size: 14px;
    color: #fff;
    display: inline-block;
    line-height: 1;
    float: right;
    position: relative;
    right: -40px;
    top: -10px;
    text-align: left;
  }
}
.m-progress-line {
  margin-bottom: 15px;
  width: 350px;
  display: block;
}
.m-progress-inner {
  background-color: #409eff;
}
.mProgress.is-success {
  .m-progress-inner {
    background-color: #67C23A;
  }
  .m-progress-text {
    color: #67C23A;
  }
}
.mProgress.is-warning {
  .m-progress-inner {
    background-color: #E6A23C;
  }
  .m-progress-text {
    color: #E6A23C;
  }
}
.mProgress.is-exception {
  .m-progress-inner {
    background-color: #F56C6C;
  }
  .m-progress-text {
    color: #F56C6C;
  }
}
</style>
