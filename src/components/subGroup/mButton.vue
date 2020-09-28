<template>
  <button 
   @click="handleClick"
   :class="[
   'mButton',
   'mButton-' + type,
   'mButton-' + size,
   plain ? 'is-plain':'',
   round ? 'is-round':'',
   circle ? 'is-circle':'',
   disabled ? 'is-disabled':'']"> 
   <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'mButton',
  data() {
    return {
    };
  },
  props: {
    size: String,
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
  },
  computed:{
  },
  watch:{
  },
  methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
};
</script>

<style scoped>
.mButton {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: 0;
}
.mButton + .mButton {
  margin-left: 10px;
}
.mButton:focus, .mButton:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.mButton:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}
.mButton-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.mButton-primary:focus,
.mButton-primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #FFF
}

.mButton-primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #FFF;
  outline: 0
}
.mButton-primary.is-active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #FFF
}
.mButton-primary.is-plain {
  color: #409EFF;
  background: #ecf5ff;
  border-color: #b3d8ff
}
.mButton-primary.is-plain:focus,
.mButton-primary.is-plain:hover {
  background: #409EFF;
  border-color: #409EFF;
  color: #FFF
}
.mButton-primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #FFF;
  outline: 0
}
.mButton-success {
  color: #FFF;
  background-color: #67C23A;
  border-color: #67C23A;
}
.mButton-success:focus,
.mButton-success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #FFF
}
.mButton-success.is-active,
.mButton-success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #FFF
}
.mButton-success:active {
  outline: 0
}
.mButton-success.is-plain {
  color: #67C23A;
  background: #f0f9eb;
  border-color: #c2e7b0
}
.mButton-success.is-plain:focus,
.mButton-success.is-plain:hover {
  background: #67C23A;
  border-color: #67C23A;
  color: #FFF
}
.mButton-success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #FFF;
  outline: 0
}
.mButton-info {
  color: #FFF;
  background-color: #909399;
  border-color: #909399
}
.mButton-info:focus,
.mButton-info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #FFF
}
.mButton-info.is-active,
.mButton-info:active {
  background: #82848a;
  border-color: #82848a;
  color: #FFF
}
.mButton-info:active {
  outline: 0
}
.mButton-info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6
}

.mButton-info.is-plain:focus,
.mButton-info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #FFF
}

.mButton-info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #FFF;
  outline: 0
}

.mButton-warning {
  color: #FFF;
  background-color: #E6A23C;
  border-color: #E6A23C;
}
.mButton-warning:focus,
.mButton-warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #FFF
}
.mButton-warning.is-active,
.mButton-warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #FFF
}
.mButton-warning:active {
  outline: 0
}
.mButton-warning.is-plain {
  color: #E6A23C;
  background: #fdf6ec;
  border-color: #f5dab1
}
.mButton-warning.is-plain:focus,
.mButton-warning.is-plain:hover {
  background: #E6A23C;
  border-color: #E6A23C;
  color: #FFF
}
.mButton-warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #FFF;
  outline: 0
}
.mButton-danger {
  color: #FFF;
  background-color: #F56C6C;
  border-color: #F56C6C;
}
.mButton-danger:focus,
.mButton-danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #FFF
}
.mButton-danger.is-active,
.mButton-danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #FFF
}
.mButton-danger:active {
  outline: 0
}
.mButton-danger.is-plain {
  color: #F56C6C;
  background: #fef0f0;
  border-color: #fbc4c4
}

.mButton-danger.is-plain:focus,
.mButton-danger.is-plain:hover {
  background: #F56C6C;
  border-color: #F56C6C;
  color: #FFF
}
.mButton-danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #FFF;
  outline: 0
}
.mButton.is-round {
  border-radius: 20px;
}
.mButton.is-circle {
  padding: 20px 20px;
  border-radius: 50%;
}

.mButton-medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px
}
.mButton-medium.is-circle {
  padding: 15px 15px;
}
.mButton-mini,
.mButton-small {
  font-size: 12px;
  border-radius: 3px
}
.mButton-small {
  padding: 9px 15px
}
.mButton-small.is-circle {
  padding: 9px 9px;
}
.mButton-mini {
  padding: 7px 15px
}
.mButton-mini.is-circle {
  padding: 7px 7px;
}
.mButton.is-disabled,
.mButton.is-disabled:focus,
.mButton.is-disabled:hover {
  color: #C0C4CC;
  cursor: not-allowed;
  background-image: none;
  background-color: #FFF;
  border-color: #EBEEF5
}
.mButton.is-disabled.is-plain,
.mButton.is-disabled.is-plain:focus,
.mButton.is-disabled.is-plain:hover {
  background-color: #FFF;
  border-color: #EBEEF5;
  color: #C0C4CC
}
.mButton-primary.is-disabled,
.mButton-primary.is-disabled:active,
.mButton-primary.is-disabled:focus,
.mButton-primary.is-disabled:hover {
  color: #FFF;
  background-color: #a0cfff;
  border-color: #a0cfff
}
.mButton-primary.is-plain.is-disabled,
.mButton-primary.is-plain.is-disabled:active,
.mButton-primary.is-plain.is-disabled:focus,
.mButton-primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff
}
.mButton-success.is-disabled,
.mButton-success.is-disabled:active,
.mButton-success.is-disabled:focus,
.mButton-success.is-disabled:hover {
  color: #FFF;
  background-color: #b3e19d;
  border-color: #b3e19d
}
.mButton-success.is-plain.is-disabled,
.mButton-success.is-plain.is-disabled:active,
.mButton-success.is-plain.is-disabled:focus,
.mButton-success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8
}
.mButton-warning.is-disabled,
.mButton-warning.is-disabled:active,
.mButton-warning.is-disabled:focus,
.mButton-warning.is-disabled:hover {
  color: #FFF;
  background-color: #f3d19e;
  border-color: #f3d19e
}
.mButton-warning.is-plain.is-disabled,
.mButton-warning.is-plain.is-disabled:active,
.mButton-warning.is-plain.is-disabled:focus,
.mButton-warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8
}
.mButton-danger.is-disabled,
.mButton-danger.is-disabled:active,
.mButton-danger.is-disabled:focus,
.mButton-danger.is-disabled:hover {
  color: #FFF;
  background-color: #fab6b6;
  border-color: #fab6b6
}
.mButton-danger.is-plain.is-disabled,
.mButton-danger.is-plain.is-disabled:active,
.mButton-danger.is-plain.is-disabled:focus,
.mButton-danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2
}
.mButton-info.is-disabled,
.mButton-info.is-disabled:active,
.mButton-info.is-disabled:focus,
.mButton-info.is-disabled:hover {
  color: #FFF;
  background-color: #c8c9cc;
  border-color: #c8c9cc
}
.mButton-info.is-plain.is-disabled,
.mButton-info.is-plain.is-disabled:active,
.mButton-info.is-plain.is-disabled:focus,
.mButton-info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb
}
</style>

