<template>
    <div class="page fx-column cl-white fz-30">
      <div class="page__topbar fx-align-center">
        <div class="page__topbar__left flex1" @click="$router.go(-1)">
          <i class="iconfont icon-guanbi fz-48 cl-white"></i>
        </div>
        <div class="page__topbar__logo fx-center flex4">
          <img src="../assets/img/common/header_logo_white.png"/>
        </div>
        <div class="page__topbar__right flex1"></div>
      </div>
      <div class="page__content fx-column flex1">
        <div class="page__content__top fx-space-around">
          <div class="fx-column-align-center">
            <i class="iconfont icon-huiyuan cl-green fz-72"></i>
            <span>会员</span>
          </div>
          <div class="fx-column-align-center">
            <i class="iconfont icon-zixun cl-green fz-72"></i>
            <span>咨询</span>
          </div>
          <div class="fx-column-align-center">
            <i class="iconfont icon-dingyue cl-green fz-72"></i>
            <span>订阅</span>
          </div>
        </div>
        <div class="page__content__menu fx-center">关于我们</div>
        <div class="page__content__menu fx-center">联系我们</div>
        <div class="page__content__menu fx-center">服务条款</div>
        <div class="page__content__menu fx-center">帮助</div>
        <div class="page__content__footer fx-align-end flex1">
          <div class="fx-space-around">
            <i class="iconfont icon-facebook"></i>
            <i class="iconfont icon-juxing"></i>
            <i class="iconfont icon-insgram"></i>
            <i class="iconfont icon-LinkedIn"></i>
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-weibo"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    width: 10rem;
    min-height: 100vh;
    background: $cl-black;
    &__topbar {
      box-sizing: border-box;
      height: tr(100px);
      padding: 0 tr(30px);
      &__logo {
        img {
          height: tr(50px);
        }
      }
    }
    &__content {
      padding: 0 tr(30px);
      color: $cl-gray;
      &__top {
        padding: tr(125px) 0 tr(80px);
        border-bottom: tr(1px) solid $cl-gray-dark;
      }
      &__menu {
        height: tr(108px);
        border-bottom: tr(1px) solid $cl-gray-dark;
      }
    }
  }
</style>
