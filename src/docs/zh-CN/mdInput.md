# Input输入框
通过鼠标或键盘输入字符
:::warning 
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

### 基础用法
:::demo
```html
<m-input v-model="input" placeholder="请输入内容"></m-input>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<m-input placeholder="请输入内容" v-model="input" disabled></m-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 可清空

:::demo 使用 `clearable` 属性即可得到一个可清空的输入框

```html
<m-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</m-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 密码框

:::demo 使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

```html
<m-input placeholder="请输入密码" v-model="input" password></m-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。

:::demo 文本域高度可通过 `rows` 属性控制
```html
<el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::