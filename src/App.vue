<template>
  <div id="app">
    <mw-radio v-model="gender" label="1">boy</mw-radio>
    <mw-radio v-model="gender" label="0">girl</mw-radio>
    <mw-radio v-model="gender" label="1"></mw-radio>
    <mw-radio v-model="gender" label="0"></mw-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gender: 1
    }
  }
}
</script>

<style lang="scss">

</style>