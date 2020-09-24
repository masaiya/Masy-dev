<template>
  <transition name="dialog-fade">
    <div class="dialog_wrapper" v-show="visible" @click.self="wrapperClick">
      <div class="dialog" :style="width">
        <div class="dialog_header">
          <slot name="header">
            <span class="dialog_title">{{title}}</span>
          </slot>
        </div>
        <div class="dialog_body">
          <slot>这是默认内容</slot>
        </div>
        <div class="dialog_footer" v-if="$slots.footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'mDialog',
  data() {
    return {
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '30%'
    }
  },
  computed:{
  },
  watch:{
  },
  methods: {
    wrapperClick() {
      this.$emit('closePop');
    }
  },
};
</script>

<style scoped>
.dialog_wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.dialog {
  position: relative;
  top: 15%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  width: 300px;
  z-index: 1;
}
.dialog_title {
  padding: 20px 20px 10px 20px;
  display: block;
  color: #303133;
  font-size: 18px;
}
.dialog_body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
}
.dialog_footer {
  padding: 10px 20px 20px;
  text-align: right;
}
.dialog-fade-enter-active {
  animation: dialog-fade-in .3s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out .3s;
}
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
