<template>
    <transition name="dialog-fade">
      <!-- 对话框的遮罩 -->
    <div class="mw-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="mw-dialog" :style="{width, marginTop: top}">
        <div class="mw-dialog_header">
          <slot name="title">
            <!-- 将span放到slot内，作为插槽的默认内容 -->
          <span class="mw-dialog_title">
            {{title}}
          </span>
          </slot>
          <button class="mw-dialog_headerbtn" @click="handleClose">
            <i class="mw-icon-close"></i>
          </button>
        </div>
        <div class="mw-dialog_body">
          <!-- 使用匿名插槽接收需填充到对话框body部分的内容 -->
          <slot></slot>
        </div>
        <div class="mw-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'MwDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.mw-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .mw-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .mw-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .mw-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .mw-icon-close{
          color:#909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .mw-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>