<template>
  <div id="side">
     <ul>
       <li class="nav-item" v-for="(item, index) in items" :key="index">
         <a v-if="!item.path">{{item.name}}</a>
         <ul class="sub-nav">
           <li class="sub-item" v-for="(item1, index1) in item" :key="index1">
             <a href=""></a>
           </li>
         </ul>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'side',
  data() {
    return {
      items: [
        {
          "name": "小栗子",
          "children": [
            {
              "path": "/todoMvc",
              "name": "todoMvc"
            }
          ]
        },
        {
          "name": "组件",
          "children": [
            {
              "path": "/dialog",
              "name": "弹窗"
            },
            {
              "path": "/button",
              "name": "按钮"
            }
          ]
        }
      ]
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>
