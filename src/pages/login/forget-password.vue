<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="找回密码"></tf-deputy-topbar>
    <div class="page__content login-input">
      <input  class="page__content__email" type="email" placeholder="请输入邮箱"/>
      <div class="flexbox">
        <input class="flex1" placeholder="请输入验证码"/>
        <div class="page__content__validate-code">
        </div>
      </div>
      <button class="page__content__button btn btn--lg" @click="$router.push('/login/reset-password')">下一步</button>
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
    min-height: 100vh;
    &__content {
      padding: tr(60px) tr(30px) tr(80px);
      flex: 1;
      &__email{
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
