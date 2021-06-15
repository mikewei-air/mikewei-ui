<template>
  <div id="app">
    <mw-checkbox label="1" v-model="active">西瓜</mw-checkbox>

    <mw-checkbox-group v-model="language">
    <mw-checkbox label="python" ></mw-checkbox>
    <mw-checkbox label="JS"></mw-checkbox>
    <mw-checkbox label="C"></mw-checkbox>
    <mw-checkbox label="Java"></mw-checkbox>
    </mw-checkbox-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      language: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>