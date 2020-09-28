<template>
  <a :class="[
      'mLink',
      'mLink-' + type,
      disabled && 'is-disabled',
      !underline ? 'isnot-underline' : '',
      ]"
      :href = "href"
      @click="handleClick">
      <span v-if="$slots.default" class="mLinkText">
        <slot></slot>
      </span>
  </a>
</template>

<script>
export default {
  name: 'mLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    underline: {
      type: Boolean,
      default: true
    },
    href: String
  },
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    handleClick() {
      if(!this.disabled) {
        this.$emit('click');
      }
    }
  },
};
</script>

<style scoped lang="scss">
.mLink {
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
}
.mLink.is-disabled {
  cursor: not-allowed;
  text-decoration: none;
}
.mLink-default {
  color: #606266;
  &:hover {
    color: #409EFF;
  }
}
.mLink-default.is-disabled {
  color: #c0c4cc;
}
.mLink-primary {
  color: #409eff;
}
.mLink-primary.is-disabled {
  color: #a0cfff;
}
.mLink-success {
  color: #67c23a;
}
.mLink-success.is-disabled {
  color: #b3e19d;
}
.mLink-warning {
  color: #e6a23c;
}
.mLink-warning.is-disabled {
  color: #f3d19e;
}
.mLink-danger {
  color: #f56c6c;
}
.mLink-danger.is-disabled {
  color:#fab6b6;
}
.mLink-info {
  color: #909399;
}
.mLink-info.is-disabled {
  color: #c8c9cc;
}
.isnot-underline {
  &:hover {
    text-decoration: none;
  }
}
</style>
