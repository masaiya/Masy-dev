<template>
  <div class="rotate">
    <div class="wrap">
      <div class="cube">
        <div class="out_front">
          <img class="pic" src="../../assets/images/1.jpg">
        </div>
        <div class="out_back">
          <img class="pic" src="../../assets/images/2.jpg">
        </div>
        <div class="out_left">
          <img class="pic" src="../../assets/images/3.jpg">
        </div>
        <div class="out_right">
          <img class="pic" src="../../assets/images/4.jpg">
        </div>
        <div class="out_top">
          <img class="pic" src="../../assets/images/5.jpg">
        </div>
        <div class="out_bottom">
          <img class="pic" src="../../assets/images/6.jpg">
        </div>
        <span class="in_front">
          <img class="in_pic" src="../../assets/images/1.jpg">
        </span>
        <span class="in_back">
          <img class="in_pic" src="../../assets/images/2.jpg">
        </span>
        <span class="in_left">
          <img class="in_pic" src="../../assets/images/3.jpg">
        </span>
        <span class="in_right">
          <img class="in_pic" src="../../assets/images/4.jpg">
        </span>
        <span class="in_top">
          <img class="in_pic" src="../../assets/images/5.jpg">
        </span>
        <span class="in_bottom">
          <img class="in_pic" src="../../assets/images/6.jpg">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rotate',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
.rotate {
  position: absolute;
  top: 110px;
  left: 200px;
  width: 100px;
  height: 100px;
}
.wrap {
  width: 100px;
  height: 100px;
  margin: 150px 0 0 150px;
  position: absolute;
}
.cube {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-80deg);
  animation: rotate linear 20s infinite;
}
@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.cube div {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.5;
  transition: all .4s;
}
.pic {
  width: 200px;
  height: 200px;
}
.cube .out_front {
  transform: translateZ(100px);
}
.cube .out_back {
  transform: translateZ(-100px);
}
.cube .out_left {
  transform: rotatey(90deg) translateZ(100px);
}
.cube .out_right {
  transform: rotateY(-90deg) translateZ(100px);
}
.cube .out_top {
  transform: rotateX(90deg) translateZ(100px);
}
.cube .out_bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.cube span {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
  opacity: 1;
}
.cube .in_pic {
  width: 100px;
  height: 100px;
}
.cube .in_front {
  transform: translateZ(50px);
}
.cube .in_back {
  transform: translateZ(-50px);
}
.cube .in_left {
  transform: rotateY(90deg) translateZ(50px);
}
.cube .in_right {
  transform: rotateY(-90deg) translateZ(50px);
}
.cube .in_top {
  transform: rotateX(90deg) translateZ(50px);
}
.cube .in_bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

.cube:hover .out_front {
  transform: translateZ(200px);
}
.cube:hover .out_back {
  transform: translateZ(-200px);
}
.cube:hover .out_left {
  transform: rotateY(90deg) translateZ(200px);
}
.cube:hover .out_right {
  transform: rotateY(-90deg) translateZ(200px);
}
.cube:hover .out_top {
  transform: rotateX(90deg) translateZ(200px);
}
.cube:hover .out_bottom {
  transform: rotateX(-90deg) translateZ(200px);
}
</style>
