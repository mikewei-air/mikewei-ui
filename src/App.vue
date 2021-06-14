<template>
  <div id="app">
    <mw-dialog title="温馨提示" :visible.sync='visible'>
      <p>天气很热诶</p>
      <template #footer>
        <mw-button @click="visible=false">取消</mw-button>
        <mw-button type="primary" @click="visible=false">确定</mw-button>
      </template>
    </mw-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  methods: {
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .mw-button {
    margin-right: 20px;
  }
}
</style>