<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="重置密码"></tf-deputy-topbar>
    <div class="page__content login-input">
      <input  class="page__content__pass" type="password" placeholder="请输入6-15位的密码"/>
      <input  class="page__content__pass" type="password" placeholder="请输入再次输入登录密码"/>
      <button class="page__content__button btn btn--lg">保存</button>
    </div>
  </div>
</template>

<script>
  import deputyTopbar from '@/components/deputy-topbar.vue'

  export default {
    components: {
      'tf-deputy-topbar': deputyTopbar
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    width: 10rem;
    min-height: 100vh;
    background: $cl-white;
    &__content {
      padding: tr(60px) tr(30px) tr(80px);
      flex: 1;
      &__pass{
        width: 100%;
      }
      &__validate-code {
        width: tr(160px);
        height: tr(86px);
        margin-left: tr(20px);
        background: $cl-white-dark;
      }
      &__button {
        width: 100%;
        margin-top: tr(80px);
      }
    }
  }
</style>
