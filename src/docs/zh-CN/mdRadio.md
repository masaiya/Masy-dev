# Radio 单选框
在一组备选项中进行单选。

### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用Select选择器


:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。
```html
<div>
  <m-radio v-model="radio" label="1">备选项1</m-radio>
  <m-radio v-model="radio" label="2">备选项2</m-radio>
</div>

<script>
  import mRadio from "../../components/subGroup/mRadio.vue"
  export default {
    components: {
      mRadio
    },
    data() {
      return {
        radio: '1',
        radio1: '1'
      }
    }
  };
</script>
```
:::

### 禁用状态
单选项不可用的状态

:::demo 只要在`m-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
```html
<div>
  <m-radio disabled v-model="radio1" label="1">备选项1</m-radio>
  <m-radio disabled v-model="radio1" label="2">备选项2</m-radio>
</div>
<script>
  import mRadio from "../../components/subGroup/mRadio.vue"
  export default {
    components: {
      mRadio
    },
    data() {
      return {
        radio1: '1'
      }
    }
  };
</script>
```
:::
