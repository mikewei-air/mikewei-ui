<template>
  <div id="app">
    <mw-form :model="model" label-width="100px">
      <mw-form-item label="用户名">
        <mw-input placeholder="请输入用户名" v-model="model.username" clearable></mw-input>
      </mw-form-item>
      <mw-form-item label="密码">
        <mw-input v-model="model.password" placeholder="请输入密码" type='password' showPassword></mw-input>
      </mw-form-item>
    </mw-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  .mw-input {
    width: 30%;
  }
}
</style>