<template>
  <div id="app">
    <mw-input type="text" placeholder="I am fine"></mw-input>
    <mw-input type="text" placeholder="I am fine" v-model="value" clearable></mw-input>
    <mw-input type="password" v-model="value" showPassword></mw-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '123'
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 30%;
}
</style>