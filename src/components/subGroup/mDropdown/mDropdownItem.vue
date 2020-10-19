<template>
  <li class="mDropdownItem" @click="clickhandle">
    <slot></slot>
  </li>
</template>

<script>
import store from "../../../store/store"
export default {
  name: 'mDropdownItem',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    clickhandle() {
      store.commit('toggle');
    }
  },
};
</script>

<style scoped lang="scss">
.mDropdownItem {
  width: 100%;
  color: #606266;
  border-bottom: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  padding: 5px 2px;
  &:hover {
    color: #409eff;
  }
  &:last-child {
    border-bottom: none;
  }
}
</style>