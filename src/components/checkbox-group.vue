<template>
  <div class="mw-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MwCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
