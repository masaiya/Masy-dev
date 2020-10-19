# 我是DropDown.md
将动作或菜单折叠到下拉菜单中。

### 基础用法
移动到下拉菜单上，展开更多操作。

:::demo 通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<m-dropdown>
  <span>
    下拉菜单<i class="m-icon-arrow-down m-icon--right"></i>
  </span>
  <m-dropdown-menu slot="dropdown">
    <m-dropdown-item>黄金糕</m-dropdown-item>
    <m-dropdown-item>狮子头</m-dropdown-item>
    <m-dropdown-item>螺蛳粉</m-dropdown-item>
    <m-dropdown-item>双皮奶</m-dropdown-item>
    <m-dropdown-item>蚵仔煎</m-dropdown-item>
  </m-dropdown-menu>
</m-dropdown>
<style>
</style>
```
:::

### 触发方式
可以配置 `click` 激活或者 `hover` 激活。默认为 `click` 触发。

:::demo 在 `trigger` 属性设置为 `click` 即可。
```html
<m-dropdown>
  <span>
    hover触发<i class="m-icon-arrow-down m-icon--right"></i> 
  </span>
  <m-dropdown-menu slot="dropdown">
    <m-dropdown-item>黄金糕</m-dropdown-item>
    <m-dropdown-item>狮子头</m-dropdown-item>
    <m-dropdown-item>螺蛳粉</m-dropdown-item>
    <m-dropdown-item>双皮奶</m-dropdown-item>
    <m-dropdown-item>蚵仔煎</m-dropdown-item>
  </m-dropdown-menu>
</m-dropdown>
``` 
:::