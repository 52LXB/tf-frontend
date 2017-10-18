<template>
  <div class="tf-dialog" :class="[type]">
    <div class="tf-dialog__header">
      <i class="iconfont icon icon-guanbi fz-48 cl-gray-light" @click="$emit('on-close')"></i>
    </div>
    <div class="tf-dialog__body">
      <div class="tf-dialog__body-icon">
        <slot name="icon">
          <template v-if="type === 'success'">
            <img src="../../assets/img/icon-dialog-success.png"/>
          </template>
          <template v-if="type === 'fail'">
            <img src="../../assets/img/icon-dialog-fail.png"/>
          </template>
        </slot>
      </div>
      <div class="tf-dialog__body-msg">
        <p class="msg-title fz-36">{{ title }}</p>
        <p class="msg-content cl-gray fz-30">
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tfDialogBody',
    props: {
      type: {
        type: String,
        default: 'success' // 'success'：成功， 'fail': 失败
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .tf-dialog {
    padding: tr(30px);
    box-sizing: border-box;
    background: $cl-white;
    text-align: center;
    .tf-dialog__header {
      box-sizing: border-box;
      width: 100%;
      height: tr(30px);
      text-align: right;
    }
    .tf-dialog__body {
      padding: tr(20px) tr(30px) tr(30px);
      .tf-dialog__body-icon {
        img{
          width: tr(250px);
        }
      }
      .tf-dialog__body-msg {
        .msg-title {
          margin: tr(45px) 0 tr(28px);
        }
        .msg-content {
          line-height: tr(46px);
        }
      }
    }
    &.success .tf-dialog__body-msg .msg-title {
      color: $cl-primary;
    }
    &.fail .tf-dialog__body-msg .msg-title {
      color: #EAA844;
    }
  }
</style>
