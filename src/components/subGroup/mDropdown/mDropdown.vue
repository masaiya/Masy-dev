<script>
import store from "../../../store/store"
export default {
  name: 'mDropdown',
  data() {
    return {
      triggerElm: null,
      menuItemsArray: null
    };
  },
  props: {
    type: String
  },
  provide() {
    return {
      dropdown: this
    }
  },
  computed:{
  },
  watch:{
  },
  methods: {
    hide() {
      this.removeTabindex();
      if (this.tabindex >= 0) {
        this.resetTabindex(this.triggerElm);
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = false;
      }, this.trigger === 'click' ? 0 : this.hideTimeout);
    },
    removeTabindex() {
      this.triggerElm.setAttribute('tabindex', '-1');
      this.menuItemsArray.forEach((item) => {
        item.setAttribute('tabindex', '-1');
      });
    },
    resetTabindex(ele) { // 下次tab时组件聚焦元素
      this.removeTabindex();
      ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
    }
  },
  render(h) {
    let { hide } = this;
    const handleMainButtonClick = (event) => {
      this.$emit('click', event);
      hide();
    }
    let triggerElm = (<div>
      <m-button nativeOn-click={handleMainButtonClick}>
        {this.$slots.default}
      </m-button>
    </div>);

    return (
      <div class="m-dropdown">
        {triggerElm}
        {this.$slots.dropdown}
      </div>
    )
  }
};
</script>

<style scoped>
</style>
