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
        name: "我的音乐",
        children: [
          { 
            name: "李建",
            children: [
              { name: "父亲写的散文诗", status: 0 }
            ]
          },
          { 
            name: "周杰伦",
            children: [
              { name: "发如雪", status: 0 },
              { name: "青花瓷", status: 0 }
            ]
          },
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
      item.children.push( {'name' : '歌名', 'status' : 0})
    }
  },
  components: {
    treeItem
  }
};
</script>

<style scoped>

</style>
