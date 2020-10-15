# 我是DropDown.md
将动作或菜单折叠到下拉菜单中。

### 基础用法
移动到下拉菜单上，展开更多操作。

:::demo 通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<m-drop-down :data="items" :menu="menu" class="menu">
  <i class="m-icon-arrow-down m-icon--right"></i>
</m-drop-down>
<script>
  export default {
    data() {
      return {
        menu: '下拉菜单',
        items: ['烧仙草', '双皮奶', '炒酸奶']
      };
    }
  };
</script>
```
:::