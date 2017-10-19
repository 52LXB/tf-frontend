<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="注册"></tf-deputy-topbar>
    <div class="page__content fx-column">
      <div class="page__content__card fx-column-center">
        <router-link to="/join/institution/sign-up">
          <div class="page__content__card__item">
            <img src="../../assets/img/icon-institution-circle.png" />
            <p class="fz-36 cl-black card__item-type">企业</p>
            <p class="fz-24 cl-gray">我要发布职位</p>
          </div>
        </router-link>
      </div>
      <div class="page__content__card fx-column-center">
        <router-link to="/join/candidate/sign-up">
          <div class="page__content__card__item">
            <img src="../../assets/img/icon-candidate-circle.png" />
            <p class="fz-36 cl-black card__item-type">求职者</p>
            <p class="fz-24 cl-gray">我要求职</p>
          </div>
        </router-link>
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
        &__item{
          text-align: center;
          img{
            width: tr(200px);
          }
          .card__item-type{
            margin: tr(20px) 0 tr(18px);
          }
        }
      }
    }
  }
</style>

