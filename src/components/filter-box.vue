<template>
  <div class="tf-filter-box fx-justify-start">
    <div class="tf-filter-box__main flexbox">
      <div class="lable fz-24 fx-align-center">
        <span class="lable__text fx-center">
          筛选
          <i class="iconfont icon-back-right fz-24"></i>
        </span>
      </div>
      <input class="fz-30 cl-gray-dark" :placeholder="placeholder"/>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      router: {
        type: String,
        default: '/home'
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-filter-box {
    width: 100%;
    height: tr(70px);
    box-sizing: border-box;
    background: $cl-white;
    border: 1px solid $cl-sliver;
    padding-right: tr(30px);
    color: $cl-gray-dark;
    .lable {
      &__text {
        width: tr(110px);
        height: tr(24px);
        border-right: 1px solid $cl-sliver-light;
      }
    }
  }
</style>
