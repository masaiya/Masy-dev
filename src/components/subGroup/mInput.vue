<template>
  <div class="mInput" :class="[type === 'textarea' ? 'm-textarea':'m-text', {'m-disabled': disabled, 'm-input-next': clearable}]" @click="handleClick">
    <template v-if="type !== 'textarea'">
      <input :type="passwordVisible ? 'password': 'text'" class="m-input-inner" :placeholder="placeholder" v-model="inputValue" :readonly="disabled || readonly" @blur="handleBlur">
      <i class="m-input__icon m-icon-circle-close m-input__clear" v-if="isClearShow" @click="clearInput" @mousedown.prevent></i>
      <i class="m-input__icon m-icon-view m-input__clear" v-if="isPasswordShow" @click="showPassword"></i>
      </span>
    </template>
    <template v-if="type === 'textarea'">
      <textarea id="m-textarea-inner" :placeholder="placeholder" v-model="inputValue" :rows="rows" :cols="cols"></textarea>
    </template>
  </div>
</template>

<script>
export default {
  name: 'mInput',
  data() {
    return {
      inputValue: this.value,
      passwordVisible: this.password
    };
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: '',
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    },
    rows: Number,
    cols: Number,
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    isClearShow() {
      return this.clearable && this.inputValue.trim();
    },
    isPasswordShow() {
      return this.password && this.inputValue.trim();
    }
  },
  watch:{
    value(newValue) {
      this.inputValue = newValue;
    }
  },
  methods: {
    clearInput() {
      this.inputValue = ''
    },
    showPassword() {
      this.passwordVisible = !this.passwordVisible;
    },
    handleClick(event) {
      this.$emit('click', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    }
  }
};
</script>

<style scoped lang="scss">
.m-text {
  display: inline-block;
  font-size: 14px;
  position: relative;
  color: #c0c4cc;
  cursor: pointer;
  .m-input-inner {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    display:inline-block;
    height: 40px;
    padding: 0 15px;
    outline: none;
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      border-color: #409eff;
    }
    &::placeholder {
      color: #c0c4cc;
    }
  }
}
.m-disabled {
  .m-input-inner {
    background-color: #F5F7FA;
    border-color: #E4E7ED;
    color: #C0C4CC;
    cursor: not-allowed;
    &:focus, &:hover {
      border-color: #E4E7ED;
    }
  }
}
.m-input-next {
  .m-input-inner {
    padding-right: 30px;
  }
}
.m-input__clear {
  color: #C0C4CC;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: color .2s cubic-bezier(.645, .045, .355, 1);
  transition: color .2s cubic-bezier(.645, .045, .355, 1);
  position: relative;
  left: -30px;
  &:hover {
    color: #909399;
  }
}
.m-textarea {
  display: inline-block;
  font-size: 14px;
  position: relative;
  width: 100%;
  vertical-align: bottom;
  color: #c0c4cc;
  #m-textarea-inner {
    min-height: 35px;
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    color: #606266;
    outline: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    &::placeholder {
      color: #c0c4cc;
    }
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      border-color: #409eff;
    }
  }
}
</style>
