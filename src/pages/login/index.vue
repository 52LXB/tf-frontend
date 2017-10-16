<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="登 录"></tf-deputy-topbar>
    <div class="page__content login-input">
      <div class="page__content__logo fx-center">
        <img src="../../assets/img/index/login_logo.png"/>
      </div>
      <div class="page__content__form login-input">
        <input  class="page__content__form__email" type="email" placeholder="请输入邮箱"/>
        <input class="page__content__form__pass" type="password" placeholder="请输入6-15位的密码"/>
        <div class="flexbox">
          <input class="flex1" placeholder="请输入验证码"/>
          <div class="page__content__form__validate-code">
          </div>
        </div>
        <div>
          <input type="checkbox">记住密码
        </div>
        <button class="page__content__form__button btn btn--lg">登录</button>
      </div>
      <div class="page__content__footer fx-space-between">
        <span class="fz-26 cl-gray"  @click="$router.push('/login/forget-password')">忘记密码</span>
        <span class="fz-26 cl-gray" @click="$router.push('/join')">立即注册</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import deputyTopbar from '@/components/deputy-topbar.vue'

  export default {
    components: {
      'tf-deputy-topbar': deputyTopbar
    },
    methods: {
      aa () {
        console.log('aa')
      }
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
      flex: 1;
      padding: 0 tr(30px);
      &__logo {
        height: tr(370px);
        img {
          width: tr(227px);
          height: tr(161px);
        }
      }
      &__form {
        &__email, &__pass {
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
          margin: tr(60px) 0 tr(30px);
        }
      }
    }
  }
</style>
