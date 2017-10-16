<template>
  <div class="page">
    <tf-deputy-topbar title="注册"></tf-deputy-topbar>
    <div class="page__content join-mint-cell">
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" placeholder="请再次输入您的密码" type="password" v-model="password"></mt-field>
      <mt-field label="姓名" placeholder="请输入联系人姓名" v-model="username"></mt-field>
      <mt-field label="生日" placeholder="请输入您的生日" type="tel" v-model="phone"></mt-field>
      <mt-field label="国籍" placeholder="请输入您的国籍" v-model="school"></mt-field>
      <mt-field label="学历" placeholder="请输入您的学历" v-model="school"></mt-field>
      <mt-field label="学历签发学校" placeholder="请输入您的学历签发学校" v-model="school"></mt-field>
      <mt-cell title="教学培训证书">
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="来源">
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/source')"></i>
      </mt-cell>
      <mt-cell title="验证码">
        <div class="mint-cell-button__text">获取验证码</div>
      </mt-cell>
      <div class="form-item form-item--checkbox fz-26">
        <input type="checkbox">
        点击立即注册代表您同意
        <span class="cl-primary">《机构用户协议》</span>
      </div>
      <button class="page__content__button btn btn--lg" @click="$router.push('/join/check-email')">立即注册</button>
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
      &__button {
        width: 100%;
        margin-top: tr(80px);
      }
    }
  }
</style>
