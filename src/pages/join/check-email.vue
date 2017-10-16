<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="验证邮箱"></tf-deputy-topbar>
    <div class="page__content fx-column-center">
      <span class="page__content__icon">
        <i class="iconfont icon-tijiaochenggon"></i>
      </span>
      <span class="page__content__title fz-34 cl-primary">
        提交成功
      </span>
      <div class="page__content__text fz-30 cl-gray">提交成功！还差一步邮箱验证就注册成功啦！<br/> 请在72小时内移步weilaiedu@163.com<br/> 邮箱进行验证 </div>
      <div class="page__content__text fz-30 cl-gray">没有收到邮件？<span class="cl-primary">重新发送</span>
      </div>
      <button class="page__content__button btn btn--lg" @click="$router.push('/join/review')">下一步</button>
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

  .page{
    width: 10rem;
    min-height: 100vh;
    background: $cl-white;
    &__content {
      flex: 1;
      padding: tr(60px) tr(30px) tr(80px);
      &__button {
        width: 100%;
      }
    }
  }
</style>

