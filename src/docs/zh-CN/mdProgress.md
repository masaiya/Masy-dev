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

### 自定义颜色

可以通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组。

:::demo

```html
<m-progress :percentage="percentage" :color="customColor"></m-progress>
<m-progress :percentage="percentage" :color="customColorMethod()"></m-progress>
<div>
  <m-button icon="m-icon-minus" @click="decrease"> - </m-button>
  <m-button icon="m-icon-plus" @click="increase"> + </m-button>
</div>

<script>
export default {
  data() {
    return {
      customColor: '#EEB4B4',
      percentage: 10
    }
  },
  methods: {
    customColorMethod(percentage) {
      if(this.percentage < 20) {
        return '#BBFFFF';
      } else if(this.percentage < 50) {
        return '#96CDCD';
      } else if(this.percentage < 70){
        return '#668B8B';
      } else if(this.percentage < 90){
        return '#1E90FF';
      } else return '#123456';
    },
    increase() {
      this.percentage += 10;
      if(this.percentage >= 100) 
        this.percentage = 100;
    },
    decrease() {
      this.percentage -= 10;
      if(this.percentage <= 0) 
        this.percentage = 0;
    }
  }
}
</script>
```
:::
### 环形进度条

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

:::demo

```html
<m-progress type="circle" :percentage="0"></m-progress>
<m-progress type="circle" :percentage="25"></m-progress>
<m-progress type="circle" :percentage="100" status="success"></m-progress>
<m-progress type="circle" :percentage="70" status="warning"></m-progress>
<m-progress type="circle" :percentage="50" status="exception"></m-progress>
```
:::

### 仪表盘行进度条

通过 `type` 属性来指定使用仪表盘形进度条。

:::demo 
```html
<m-progress type="dashboard" :percentage="percentage"></m-progress>
<div>
  <m-button @click="decrease"> - </m-button>
  <m-button @click="increase"> + </m-button>
</div>

<script>
export default {
  data() {
    return {
      percentage: 10
    }
  },
  methods: {
    increase() {
      this.percentage += 10;
      if(this.percentage >= 100) 
        this.percentage = 100;
    },
    decrease() {
      this.percentage -= 10;
      if(this.percentage <= 0)
        this.percentage = 0;
    }
  }
}
</script>
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number         |     0-100          |     0    |
| type          | 进度条类型           | string         | line/circle/dashboard | line |
| stroke-width  | 进度条的宽度，单位 px | number          | — | 6 |
| text-inside  | 进度条显示文字内置在进度条内（只在 type=line 时可用） | boolean | — | false |
| status  | 进度条当前状态 | string | success/exception/warning | — |
| color  | 进度条背景色（会覆盖 status 状态颜色） | string/function/array | — | '' |
| width  | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | number |  | 126 |
| show-text  | 是否显示进度条文字内容 | boolean | — | true |
| stroke-linecap  | circle/dashboard 类型路径两端的形状 | string | butt/round/square | round |