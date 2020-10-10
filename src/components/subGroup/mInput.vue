<template>
  <div class="mInput" :class="[type === 'text' ? 'm-text':'m-textarea']">
    <template v-if="type === 'text'">
      <input type="text" class="m-input-inner" :placeholder="placeholder">
    </template>
  </div>
</template>

<script>

export default {
  name: 'mInput',
  data() {
    return {
    };
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.m-text {
  display: inline-block;
  font-size: 14px;
  position: relative;
  color: #c0c4cc;
  cursor: pointer;
  .m-input-inner {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    display:inline-block;
    height: 40px;
    padding: 0 15px;
    outline: none;
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      border-color: #409eff;
    }
    &::placeholder {
      color: #c0c4cc;
    }
  }
}
</style>
