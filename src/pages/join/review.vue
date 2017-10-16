<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="等待审核"></tf-deputy-topbar>
    <div class="page__content fx-column-center">
      <span class="page__content__icon">
        <i class="iconfont icon-tijiaochenggon"></i>
      </span>
      <span class="page__content__title fz-34 cl-primary">
        提交成功
      </span>
      <div class="page__content__text fz-30 cl-gray">资料已提交，平台会在七个工作日内审核 <br/> 审核通过后，您可立即发布职位！</div>
      <div class="page__content__footer">
        <button class="btn btn--lg" @click="$router.push('/')">返回首页</button>
        <div class="page__content__footer__text fz-24 cl-gray">如有任何问题，可以与我们联系，我们将尽快为你解答<br/>
          电话：400-000-000</div>
      </div>
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
      &__footer {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
  }
</style>

