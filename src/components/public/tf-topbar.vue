<template>
  <div class="tf-topbar fx-align-center">
    <div class="tf-topbar__left flex1" @click="showTfTopbarMenu = true">
      <i class="iconfont icon-menu fz-48 cl-gray"></i>
    </div>
    <div class="tf-topbar__logo fx-center flex3" @click="$router.push('/')">
      <img src="../../assets/img/common/header_logo.png"/>
    </div>
    <div class="tf-topbar__right flex1">
      <i class="iconfont icon-en cl-gray fz-36"></i>
      <i class="iconfont icon-denglu tf-topbar__right__avatar cl-gray fz-50" @click="$router.push('/login')"></i>
    </div>
    <!-- tf-topbar-menu -->
    <div v-transfer-dom>
      <popup v-model="showTfTopbarMenu" position="left">
        <div class="tf-topbar-menu-wrapper">
         <tf-topbar-menu  v-on:on-left-click="showTfTopbarMenu = false"></tf-topbar-menu>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import { Popup, TransferDom } from 'vux'

  export default {
    name: 'tfTopbar',
    directives: {
      TransferDom
    },
    components: {
      Popup
    },
    data () {
      return {
        showTfTopbarMenu: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-topbar {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 10rem;
    height: tr(100px);
    background: $cl-white;
    z-index: $layer-index-40;
    padding: 0 tr(30px);
    background: $cl-white;
    &__logo {
      img {
        height: tr(50px);
      }
    }
    &__right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &__avatar {
        margin-left: tr(30px);
      }
    }
  }
</style>
