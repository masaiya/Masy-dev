<template>
  <div class="treeView">
    <p>You can double click on an item to turn it into a folder.</p>
    <ul id="parent">
      <tree-item :item="treeData" @make-folder="makeFolder"></tree-item>
    </ul>
  </div>
</template>

<script>
import treeItem from "./treeItem"
export default {
  name: 'treeView',
  data() {
    return {
      treeData: {
        name: "My Tree",
        children: [
          { name: "hello" },
          { name: "everyone" },
          {
            name: "child folder",
            children: [
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "everyone" }]
              },
              { name: "hello" },
              { name: "everyone" },
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "everyone" }]
              }
            ]
          }
        ]
      }
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    makeFolder: function(item) {
      this.$set(item, "children", []);
      item.children.push( {'name' : 'new Staff'})
    }
  },
  components: {
    treeItem
  }
};
</script>

<style scoped>

</style>
