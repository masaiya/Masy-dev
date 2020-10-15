<template>
  <div id="svgForm">
    <p>这个例子图表使用SVG展示。</p>
    <svg width="250" height="250" class="svgPic">
      <circle cx="100" cy="100" r="100" transform="translate(30,30)"></circle>
      <polygon :points="getPoints()" transform="translate(30,30)"/>
      <text v-for="(stat, index) in stats" :key="index" :x="valueToPoint(stat.value, index, stats.length).x + 32" :y="valueToPoint(stat.value, index, stats.length).y + 32"> {{stat.label}} </text>
    </svg>
    <div class="dataShow" v-for="(stat, index) in stats" :key="index">
      <label class="label">{{ stat.label }}</label>
      <input type="range" v-model="stat.value" min="0" max="100">
      <span>{{stat.value}}</span>
      <button @click="removeStat(stat)">X</button>
    </div>
    <div class="addData">
      <input type="text" v-model="newStat" @keyup.enter="addStat">
      <button @click="addStat">Add a Stat</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'svgForm',
  data() {
    return {
      stats: [
        { label: "A", value: 100 },
        { label: "B", value: 100 },
        { label: "C", value: 100 },
        { label: "D", value: 100 },
        { label: "E", value: 100 },
        { label: "F", value: 100 }
      ],
      newStat: ''
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    valueToPoint: function(value, index, total) {
      var x = 0;
      var y = -value;
      var angle = ((Math.PI * 2) / total) * index;
      var cos = Math.cos(angle);
      var sin = Math.sin(angle);
      var tx = x * cos - y * sin + 100;
      var ty = x * sin + y * cos + 100;
      return {
        x: tx,
        y: ty
      };
    },
    getPoints: function() {
      var total = this.stats.length;
      return this.stats.map((stat, i) => {
        var point = this.valueToPoint(stat.value, i, total);
        return point.x + "," + point.y
      }).join(" ");
    },
    removeStat: function(stat) {
      if(this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1);
      } else{
        alert("已经是最少的数量，不能再删除了!");
      }
    },
    addStat: function() {
      if(!this.newStat) return;
      this.stats.push({
        label: this.newStat,
        value: 100
      })
      this.newStat = '';
    }
  },
};
</script>

<style scoped lang="scss">
.svgPic {
  margin: auto 0;
  circle {
    fill: none;
    stroke: #999;
  }
  polygon {
    fill: skyblue;
    opacity: 0.7;
  }
  text {
    font-size: 10px;
    color: #666;
    z-index: 1000;
  }
}
.dataShow {
  margin-bottom:10px;
  .label {
    width: 100px;
  }
}
.addData{
  margin-top: 20px;
  input {
    outline: none;
  }
}
.row {
  float: right;
  display: inline;
}
</style>
