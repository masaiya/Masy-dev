<template>
  <div class="mProgress" :class="['m-progress-'+type, status ? 'is-'+status : '']">
    <template v-if="type === 'line'">
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
    </template>
    <template v-if="type === 'circle'">
      <div class="m-progress-circle" :style="circleStyle">
        <svg viewBox="0 0 100 100">
          <path stroke="#e5e9f2" :stroke-width="strokeWidth" :d="track" fill="none" :style="trailPathStyle">
          </path>
          <path :stroke="circleColor" :stroke-width="percentage ? strokeWidth : '0'" :d="track" fill="none" :style="circlePathStyle">
          </path>
        </svg>
      </div>
    </template>
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
      default: 'line',
      validator: val => ['line', 'circle'].indexOf(val) > -1
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
    circleSize: {
      type: Number,
      default: 126
    },
    color: {
      type: String,
      default: ''
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
      let style = {};
      let temp;
      style.width = this.percentage + '%';
      style.height = this.height + 'px';
      if(this.color) {
        style.backgroundColor = this.color;
      } else {
        switch(this.status) {
          case 'success': 
            style.backgroundColor = '#67C23A';
            break;
          case 'exception':
            style.backgroundColor = '#F56C6C';
            break;
          case 'warning':
            style.backgroundColor = '#E6A23C';
            break;
          default: 
            style.backgroundColor = '#409eff';
        }
      }
      return style;
    },
    circleColor () {
      let color; 
      if(this.color) {
        color = this.color;
      } else {
        switch(this.status) {
          case 'success': 
            color = '#67C23A';
            break;
          case 'exception':
            color = '#F56C6C';
            break;
          case 'warning':
            color = '#E6A23C';
            break;
          default: 
            color = '#409eff';
        }
      }
      return color;
    },
    circleStyle() {
      let style = {};
      style.width = this.circleSize + 'px';
      style.height = this.circleSize + 'px';
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
      let style = {};
      style.height = this.height + 'px';
      return style;
    },
    strokeWidth() {
      return (this.height / this.circleSize * 100).toFixed(1);
    },
    radius() {
      if(this.type === 'circle') 
        return parseInt(50 - parseFloat(this.strokeWidth) / 2, 10);
      else 
        return 0;
    },
    track() {
      const radiu = this.radius;
      return `
        M 50 50
        m 0 -${radiu}
        a ${radiu} ${radiu} 0 1 1 0 ${radiu * 2}
        a ${radiu} ${radiu} 0 1 1 0 -${radiu *2}
      `;
    },
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${this.perimeter}px, ${this.perimeter}px`,
      };
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter * (this.percentage / 100) }px, ${this.perimeter}px`,
        transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
      };
    }
  }
};
</script>

<style scoped lang="scss">
.m-progress-line {
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
    height: 100%;
    font-size: 14px;
    color: #606266;
    display: block;
    line-height: 1;
    position: absolute;
    right: -40px;
    top: -3px;
  }
}
.m-progress-line {
  margin-bottom: 15px;
  width: 350px;
  display: block;
}
.mProgress.is-success {
  .m-progress-text {
    color: #67C23A;
  }
}
.mProgress.is-warning {
  .m-progress-text {
    color: #E6A23C;
  }
}
.mProgress.is-exception {
  .m-progress-text {
    color: #F56C6C;
  }
}
.m-progress-circle {
  display: inline-block;
}
</style>
