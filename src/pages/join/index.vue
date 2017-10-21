<template>
  <div class="page">
    <tf-header title="注册"></tf-header>
    <tf-wrapper class="fx-column page__wrapper">
      <div class="page__card fx-column-center">
        <router-link to="/join/institution/sign-up">
          <div class="page__card__item">
            <img src="../../assets/img/icon-institution-circle.png" />
            <p class="fz-36 cl-black card__item-type">企业</p>
            <p class="fz-24 cl-gray">我要发布职位</p>
          </div>
        </router-link>
      </div>
      <div class="page__card fx-column-center">
        <router-link to="/join/candidate/sign-up">
          <div class="page__card__item">
            <img src="../../assets/img/icon-candidate-circle.png" />
            <p class="fz-36 cl-black card__item-type">求职者</p>
            <p class="fz-24 cl-gray">我要求职</p>
          </div>
        </router-link>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page{
    width: 10rem;
    min-height: 100vh;
    background: $cl-white;
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
    &__wrapper {
      padding-bottom: tr(150px);
    }
  }
</style>

