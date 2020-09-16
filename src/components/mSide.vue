<template>
  <div id="side">
     <ul>
       <li class="nav-item" v-for="(item, index) in items" :key="index">
         <a v-if="!item.path" class="sum-item">{{item.name}}</a>
         <ul class="sub-nav">
           <li v-for="(item1, index1) in item.children" :key="index1">
             <router-link :to="item1.path" class="sub-item">{{item1.name}}
             </router-link>
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
#side {
  width: 240px;
  padding: 50px 0;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.nav-item {
  margin: 0;
  list-style: none;
  cursor: pointer;
}
.sum-item {
  color: #333;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  font-weight: 700;
  display: block;
}
.sub-item {
  color: #444;
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  font-weight: 400;
}
</style>
