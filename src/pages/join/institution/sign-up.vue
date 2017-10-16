<template>
  <div class="page">
    <tf-deputy-topbar title="注册"></tf-deputy-topbar>
    <div class="page__content join-mint-cell">
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" placeholder="请再次输入您的密码" type="password" v-model="password"></mt-field>
      <mt-field label="联系人" placeholder="请输入联系人姓名" v-model="username"></mt-field>
      <mt-field label="手机" placeholder="请输入您的手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="学校名称" placeholder="请输入学校名称" v-model="school"></mt-field>
      <mt-cell title="学校简介">
        <i class="iconfont icon-xiala"></i>
      </mt-cell>
      <mt-cell title="来源">
        <i class="iconfont icon-xiala" @click="$router.push('/join/institution/source')"></i>
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
    &__content {
      padding: 0 tr(40px);
      &__button {
        width: 100%;
        margin-top: tr(80px);
      }
    }
  }
</style>
