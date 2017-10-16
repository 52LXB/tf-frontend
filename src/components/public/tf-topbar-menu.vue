<template>
  <div class="page fx-column cl-white fz-30">
    <div class="page__topbar fx-align-center">
      <div class="page__topbar__left flex1" @click="handleClickLeft">
        <i class="iconfont icon-guanbi fz-48 cl-white"></i>
      </div>
      <div class="page__topbar__logo fx-center flex4">
        <img src="../../assets/img/common/header_logo_white.png"/>
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
        <div class="page__content__footer__innner flexbox">
          <i class="iconfont icon-facebook fz-36"></i>
          <i class="iconfont icon-juxing fz-36"></i>
          <i class="iconfont icon-insgram fz-36"></i>
          <i class="iconfont icon-LinkedIn fz-36"></i>
          <i class="iconfont icon-weixin fz-36"></i>
          <i class="iconfont icon-weibo fz-36"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tfTopbarMenu',
    methods: {
      handleClickLeft () {
        this.$emit('on-left-click')
      }
    }
  }
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
        border-bottom: tr(1px) solid rgba(204, 204, 204, 0.1);
      }
      &__menu {
        height: tr(108px);
        border-bottom: tr(1px) solid rgba(204, 204, 204, 0.1);
      }
      &__footer {
        padding: 0 tr(40px) tr(55px);
        color: $cl-gray-dark;
        &__innner {
          width: 100%;
          i {
            text-align: center;
            flex: 1;
          }
        }
      }
    }
  }
</style>
