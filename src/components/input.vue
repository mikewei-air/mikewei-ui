<template>
  <div class="mw-input" :class="{'mw-input_suffix': showSuffix}">
      <!-- :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" -->
      <!-- 如果传了showPassword，再判断是否需要切换密码的显示；如果不传，即:type="type" -->
      <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      class="mw-input_inner"
      :class="[{'is-disabled': disabled}]
      ">
      <span class="mw-input_suffix" v-if="showSuffix">
        <i class="mw-input_icon mw-icon-cancel" v-if="clearable && value" @click="clear"></i>
        <i class="mw-input_icon mw-icon-visible" :class="{'mw-input-view-active': passwordVisible}" v-if="showPassword && type=='password'" @click="handlePassword"></i>
     </span>
  </div>
</template>

<script>
export default {
    name: 'MwInput',
    data () {
        return {
            passwordVisible: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleInput (e) {
            this.$emit('input', e.target.value)
        },
        clear (e) {
            // 清空输入框中的内容
            this.$emit('input', '')
        },
        handlePassword () {
            this.passwordVisible = !this.passwordVisible
        }
    },
    computed: {
        showSuffix () {
            return this.clearable || this.showPassword
        }
    }
}
</script>

<style lang="scss" scoped>
.mw-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .mw-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用状态的样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .mw-input_suffix{
    .mw-input_inner{
      padding-right: 30px;
    }
    .mw-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .mw-input-view-active{
          color: blue;
      }
    }
  }
</style>