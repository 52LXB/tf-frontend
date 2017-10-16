<template>
  <div class="tf-topbar fx-align-center ">
    <div class="tf-topbar__left flex1">
      <i class="iconfont icon-menu fz-48 cl-gray" @click="$router.push('/home/menu')"></i>
    </div>
    <div class="tf-topbar__logo fx-center flex4">
      <img src="../assets/img/common/header_logo.png"/>
    </div>
    <div class="tf-topbar__right flex1">
      <i class="iconfont icon-en cl-gray fz-36"></i>
      <i class="iconfont icon-denglu cl-gray fz-36" @click="$router.push('/login')"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-topbar {
    box-sizing: border-box;
    width: 100%;
    height: tr(100px);
    padding: 0 tr(30px);
    background: $cl-white;
    &__logo {
      img {
        height: tr(50px);
      }
    }
  }
</style>
