<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="注册"></tf-deputy-topbar>
    <div class="page__content fx-column">
      <div class="page__content__card fx-column-center">
        <router-link to="/join/institution/sign-up">
          <div class="page__content__card_o">
            <i class="iconfont icon-yuanjiaojuxing"></i>
          </div>
        </router-link>
        <div class="page__content__card__title">企业</div>
        <div class="page__content__card__subtitle">我要发布职位</div>
      </div>
      <div class="page__content__card fx-column-center">
        <router-link to="/join/candidate/sign-up">
          <div class="page__content__card_o">
            <i class="iconfont icon-qiuzhizhe"></i>
          </div>
        </router-link>
        <div class="page__content__card__title">求职者</div>
        <div class="page__content__card__subtitle">我要求职</div>
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
      &__card {
        flex: 1;
      }
    }
  }
</style>

