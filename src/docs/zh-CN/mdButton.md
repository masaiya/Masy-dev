## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<div class="m-row">
  <m-button>默认按钮</m-button>
  <m-button type="primary">主要按钮</m-button>
  <m-button type="success">成功按钮</m-button>
  <m-button type="info">信息按钮</m-button>
  <m-button type="warning">警告按钮</m-button>
  <m-button type="danger">危险按钮</m-button>
</div>

<div class="m-row">
  <m-button plain>朴素按钮</m-button>
  <m-button type="primary" plain>主要按钮</m-button>
  <m-button type="success" plain>成功按钮</m-button>
  <m-button type="info" plain>信息按钮</m-button>
  <m-button type="warning" plain>警告按钮</m-button>
  <m-button type="danger" plain>危险按钮</m-button>
</div>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<div class="m-row">
  <m-button>默认按钮</m-button>
  <m-button size="medium">中等按钮</m-button>
  <m-button size="small">小型按钮</m-button>
  <m-button size="mini">超小按钮</m-button>
</div>
```
:::
### 不同形状

Button 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮形状。

:::demo 你可以使用`round`和`circle`属性来定义按钮是圆角或者圆形，它们接受一个`Boolean`值。

```html
<div class="m-row">
  <m-button round>圆角按钮</m-button>
  <m-button type="primary" round>主要按钮</m-button>
  <m-button type="success" round>成功按钮</m-button>
  <m-button type="info" round>信息按钮</m-button>
  <m-button type="warning" round>警告按钮</m-button>
  <m-button type="danger" round>危险按钮</m-button>
</div>

<div class="m-row">
  <m-button circle></m-button>
  <m-button type="primary" circle></m-button>
  <m-button type="success" circle></m-button>
  <m-button type="info" circle></m-button>
  <m-button type="warning" circle></m-button>
  <m-button type="danger" circle></m-button>
</div>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<div class="m-row">
  <m-button disabled>默认按钮</m-button>
  <m-button type="primary" disabled>主要按钮</m-button>
  <m-button type="success" disabled>成功按钮</m-button>
  <m-button type="info" disabled>信息按钮</m-button>
  <m-button type="warning" disabled>警告按钮</m-button>
  <m-button type="danger" disabled>危险按钮</m-button>
</div>

<div class="m-row">
  <m-button plain disabled>朴素按钮</m-button>
  <m-button type="primary" plain disabled>主要按钮</m-button>
  <m-button type="success" plain disabled>成功按钮</m-button>
  <m-button type="info" plain disabled>信息按钮</m-button>
  <m-button type="warning" plain disabled>警告按钮</m-button>
  <m-button type="danger" plain disabled>危险按钮</m-button>
</div>
```
:::

<script> 
  import mButton from "../../components/subGroup/mButton.vue"
  export default {
    components: {
      mButton
    }
  };
</script>
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
