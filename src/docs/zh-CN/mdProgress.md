# Progress进度条
用于展示操作进度，告知用户当前状态和预期

### 线形进度条
:::demo Progress 组件设置 `percentage` 属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 `format` 属性来指定进度条文字内容。
```html
<m-progress :percentage="50"></m-progress>
<m-progress :percentage="100"></m-progress>
<m-progress :percentage="100" status="success"></m-progress>
<m-progress :percentage="98" status="exception"></m-progress>
<m-progress :percentage="70" status="warning"></m-progress>

``` 
:::

### 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

:::demo Progress 组件可通过 `height` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

```html
<m-progress :text-inside="true" :height="26" :percentage="70"></m-progress>
<m-progress :text-inside="true" :height="24" :percentage="100" status="success"></m-progress>
<m-progress :text-inside="true" :height="22" :percentage="80" status="warning"></m-progress>
<m-progress :text-inside="true" :height="20" :percentage="50" status="exception"></m-progress>
```
:::