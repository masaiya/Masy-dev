<template>
  <transition name="menu"> 
    <ul class="m-dropdown-menu" v-if="$store.state.showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
import store from "../../../store/store"
export default {
  name: 'mDropdownMenu',
  data() {
    return {
    };
  },
  inject: ['dropdown'],
  computed:{
  },
  watch:{
  },
  methods:{}
};
</script>

<style scoped>
.m-dropdown-menu {
  position: absolute;
  z-index: 10;
  transition: .3s;
}
</style>
