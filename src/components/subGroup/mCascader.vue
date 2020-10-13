<template>
  <div class="mCascader">
    <m-input :value="valueInput" @click="openFirst" readonly @blur="handle"></m-input>
    <div class="list-box" v-if="isVisibleFirst">
      <div class="list1">
        <div class="item1" v-for="(item1, index1) in options" :key="index1+'1'" v-if="isVisibleFirst" @click="openSeccond(index1)"
         :class="{'current': cur === index1, 'disabled': item1.disabled}">
          {{item1.name}}
        </div>
      </div>
      <div class="list2"  v-if="isVisibleSeccond">
        <div class="item2" v-for="(item2, index2) in options[cur].children" :key="index2+'2'" @click="chooseDic(index2)" :class="cur2===index2 ? 'current':''">
          {{item2.name}}
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'mCascader',
  data() {
    return {
      valueInput: '',
      cur: -1,
      cur2: -1,
      isVisibleFirst: false,
      isVisibleSeccond: false
    };
  },
  props: {
    value: '',
    options: Array
  },
  computed:{
  },
  watch:{
  },
  methods: {
    openFirst() {
      this.isVisibleFirst = !this.isVisibleFirst;
    },
    openSeccond(index1) {
      this.cur = index1;
      this.isVisibleSeccond = true;
    },
    chooseDic(index2) {
      this.cur2 = index2;
      this.valueInput = this.options[this.cur].name +" / "+this.options[this.cur].children[index2].name;
      this.isVisibleFirst = false;
    },
    handle() {
      console.log('handle');
    }
  },
};
</script>

<style scoped lang="scss">
.mCascader {
  position: relative;
  cursor: pointer;
  m-input {
    cursor: pointer;
  }
  .list-box {
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 10;
    transition: 200ms;
    background: transparent;
    .list1 {
      float: left;
      border: 1px solid #ddd;
      .item1 {
        width: 150px;
        height: 40px;
        text-align: center;
        background: #fff;
        border-bottom: 1px solid #ddd;
        line-height: 40px;
        box-sizing: border-box;
        &:last-child {
          border-bottom: 0;
        }
      }
    }
    .list2 {
      float: right;
      background: #fff;
      border: 1px solid #ddd;
      border-left: none;
      .item2 {
        width: 100px;
        height: 40px;
        background: #fff;
        border-bottom: 1px solid #ddd;
        line-height: 40px;
        box-sizing: border-box;
        text-align: center;
        &:last-child {
          border-bottom: 0;
      }
    }
  }
}
}
.current {
  color: #409EFF;
}
.disabled {
  cursor: not-allowed;
  pointer-events: none;
  color: #c0c4cc;
}
</style>
