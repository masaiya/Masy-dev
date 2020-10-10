<template>
  <li id="treeItem">
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="makeFolder">
      {{ item.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+'}}]</span>
    </div>
    <ul v-show="isOpen">
      <tree-item v-for="(child, index) in item.children" :key="index" :item="child" @make-folder="$emit('make-folder', $event)"></tree-item>
      <li class="add" @click="addItem" v-if="isFolder">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'treeItem',
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    item: Object
  },
  computed:{
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }
  },
  watch:{
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },
    addItem: function() {
      this.item.children.push({ 'name':'new Staff' });
    },
    makeFolder: function() {
      if(!this.isFolder) {
        this.$emit("make-folder", this.item);
        this.isOpen = true;
      }
    },
    doFolder: function() {
      
    }
  }
};
</script>

<style scoped>
#treeItem {
  cursor: pointer;
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.bold {
  font-weight: bolder;
}
</style>
