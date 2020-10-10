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
<m-input v-model="input" placeholder="请输入内容">

</m-input>
<script>
import mInput from "../../components/subGroup/mInput.vue"
export default {
  components: {
    mInput
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::