# Progress进度条
用于展示操作进度，告知用户当前状态和预期

### 线形进度条
:::demo Progress 组件设置 `percentage` 属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 `format` 属性来指定进度条文字内容。
```html 
<m-progress :percentage="50"></m-progress>
<m-progress :percentage="70"></m-progress>
<m-progress :percentage="100" :status="success"></m-progress>
<m-progress :percentage="98" :status="exception"></m-progress>
<m-progress :percentage="70" :status="warning"></m-progress>
<m-progress :percentage="50"></m-progress>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
``` 
:::