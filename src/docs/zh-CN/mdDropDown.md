# 我是DropDown.md
将动作或菜单折叠到下拉菜单中。

### 基础用法
移动到下拉菜单上，展开更多操作。

:::demo 通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<m-drop-down>
  
</m-drop-down>
<script>
  import mDropDown from "../../components/subGroup/mDropDown.vue"
  export default {
    data() {
      return {
        
      };
    },
    components: {
      mDropDown
    }
  };
</script>
```
:::