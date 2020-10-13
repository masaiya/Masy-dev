## Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

### 基础用法
click 触发子菜单

:::demo 只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。
```html
<m-cascader v-model="value" :options="options">
</m-cascader> 

<script>
export default {
  data() {
    return {
      value: '',
      options: [{
          name: '粤菜',
          children: [{
            name: '清蒸桂花鱼'
          }, {
            name: '梅菜扣肉'
          }]
        }, {
          name: '湘菜',
          children: [{
            name: '小炒肉'
          }, {
            name: '剁椒鱼头'
          }, {
            name: '水煮鱼'
          }]
        }, {
          name: '甜品',
          children: [{
            name: '西米露'
          }, {
            name: '双皮奶'
          }, {
            name: '凉粉'
          }]
        }]
    }
  }
}
</script>
```
:::

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

:::demo 本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。
```html
<m-cascader v-model="value" :options="options">
</m-cascader>
<script>
export default {
  data() {
    return {
      value: '',
      options: [{
          name: '粤菜',
          disabled: true,
          children: [{
            name: '清蒸桂花鱼'
          }, {
            name: '梅菜扣肉'
          }]
        }, {
          name: '湘菜',
          children: [{
            name: '小炒肉'
          }, {
            name: '剁椒鱼头'
          }, {
            name: '水煮鱼'
          }]
        }, {
          name: '甜品',
          children: [{
            name: '西米露'
          }, {
            name: '双皮奶'
          }, {
            name: '凉粉'
          }]
        }]
    }
  }
}
</script>
```
:::