<template>
  <div class="tf-topbar  fx-align-center cl-black">
    <span class="tf-topbar__back" @click="$router.go(-1)">
      <i class="iconfont icon-fanhui"></i>
    </span>
    <div class="tf-topbar__title fz-36 fx-justify-center">{{title}}</div>
    <div class="tf-topbar__right">
      <slot name="tf-topbar__right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '标题'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-topbar {
    width: 10rem;
    height: tr(100px);
    border-bottom: $cl-sliver  solid tr(1px);
    box-sizing: border-box;
    background: $cl-white;
    &__back {
      flex: 1;
      padding-left: tr(30px);
    }
    &__title {
      flex: 4;
    }
    &__right {
      text-align: right;
      flex: 1;
      padding-right: tr(30px);
    }
  }
</style>
