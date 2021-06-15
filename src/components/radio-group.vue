<template>
  <div class="mw-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MwRadioGroup',
  // provide 与 inject  用来做祖孙之间得组件通讯
  // this表示返回组件本身
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 组件接收到了value值，我们需要触发这个组件的input事件
    value: null
  }
}
</script>