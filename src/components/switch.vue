<template>
  <div class="mw-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="mw-switch_core" ref="core">
      <span class="mw-switch_button"></span>
    </span>
    <input type="checkbox" class="mw-switch_input" :name="name" ref="input">
  </div>
</template>

<script>
export default {
    name: 'MwSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inActiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleClick () {
            this.$emit('input', !this.value)
            this.$nextTick()
            // 数据修改后，需等待dom更新，再修改颜色
            this.setColor()
            this.$refs.input.checked = this.value
        },
        setColor () {
            if (this.activeColor || this.inActiveColor) {
                const color = this.value ? this.activeColor : this.inActiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
        }
    },
    mounted () {
        this.setColor()
        // 控制checkbox的选中状态
        this.$refs.input.checked = this.value
    }
}
</script>

<style lang="scss" scoped>
.mw-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .mw-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .mw-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
  // 选中状态的样式
  .is-checked {
    .mw-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .mw-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .mw-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>