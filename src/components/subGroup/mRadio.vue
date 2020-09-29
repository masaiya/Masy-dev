<template>
  <label class="mRadio" :class="{'is-checked': model === label}"
      role="radio" :aria-checked="model === label">
    <span class="mRadio-input" :class="{'is-checked': model !== label}">
      <span class="mRadio-inner"></span>
      <input type="radio" ref="radio" class="mRadio-original" :value="label" v-model="model">
      <span class="mRadio-label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'mRadio',
  props: {
    label: {}
  },
  data() {
    return {
      value: {}
    };
  },
  computed:{
    model: {
      get() {
        console.log(this.value);
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    }
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.mRadio {
  font-size: 14px;
  line-height: 1;
  outline: 0;
  white-space: nowrap;
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  margin-right: 30px;
  display: inline-block;
  position: relative;
  .mRadio-inner {
    width: 14px;
    height: 14px;
    border: 1px solid #dcdfe6;
    border-radius: 50%;
    background-color: #fff;
    display: inline-block;
    position: relative;
    line-height: 1;
    vertical-align: middle;
    &::after {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #fff;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .mRadio-label {
    line-height: 1;
    vertical-align: middle;
  }
}
.mRadio.is-checked {
  border-color: #409eff;
}
.mRadio-input.is-checked .mRadio-inner {
  border-color: #409EFF;
  background: #409EFF
}
.mRadio-original {
  opacity: 0;
  outline: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
}
</style>
