<template>
  <div id="app">
    <div class="row">
      <MwButton type="" @click="fn" disabled>默认按钮</MwButton>
      <MwButton type="primary">主要按钮</MwButton>
      <MwButton type="success">成功按钮</MwButton>
      <MwButton type="info">信息按钮</MwButton>
      <MwButton type="warning">警告按钮</MwButton>
      <MwButton type="danger">危险按钮</MwButton>
    </div>
    <div class="row">
      <MwButton plain type="">朴素按钮</MwButton>
      <MwButton plain type="primary">主要按钮</MwButton>
      <MwButton plain type="success">成功按钮</MwButton>
      <MwButton plain type="info">信息按钮</MwButton>
      <MwButton plain type="warning">警告按钮</MwButton>
      <MwButton plain type="danger">危险按钮</MwButton>
    </div>
    <div class="row">
      <MwButton round type="">圆角按钮</MwButton>
      <MwButton round type="primary">主要按钮</MwButton>
      <MwButton round type="success">成功按钮</MwButton>
      <MwButton round type="info">信息按钮</MwButton>
      <MwButton round type="warning">警告按钮</MwButton>
      <MwButton round type="danger">危险按钮</MwButton>
    </div>
    <div class="row">
      <MwButton circle icon="mw-icon-bluetoothoff" type=""></MwButton>
      <MwButton circle icon="mw-icon-bluetoothoff" type="primary"></MwButton>
      <MwButton circle icon="mw-icon-bluetoothoff" type="success"></MwButton>
      <MwButton circle icon="mw-icon-bluetoothoff" type="info"></MwButton>
      <MwButton circle icon="mw-icon-bluetoothoff" type="warning"></MwButton>
      <MwButton circle icon="mw-icon-bluetoothoff" type="danger"></MwButton>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn () {
      console.log('i an fine')
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