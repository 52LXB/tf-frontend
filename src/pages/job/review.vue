<template>
  <div>
    <tf-header title="等待审核"></tf-header>
    <tf-wrapper>
      <div class="review">
        <div class="review__icon">
          <img src="../../assets/img/icon-status-wait.png" />
        </div>
        <div class="review__title fz-34 cl-primary">
          等待审核
        </div>
        <div class="review__content fz-30 cl-gray">
          职位已提交，平台审核通过后<br/>
          求职者就可以申请此职位啦！
        </div>
      </div>

      <div class="review__footer">
        <div class="review__footer__button fx-space-between">
          <tf-button type="primary" size="md" @click.native="$router.push('/job/create')">
            <span class="fz-30">继续发布职位</span>
            </tf-button>
          <tf-button type="primary" size="md"  @click.native="$router.push('/job/management')">
            <span class="fz-30">职位管理</span>
          </tf-button>
        </div>
        <div class="review__footer__text fz-24 cl-gray">
          如有任何问题，可以与我们联系，我们将尽快为你解答<br/>
          电话：400-000-000
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .review {
    padding: 0 tr(30px);
    text-align: center;
    .tf-step {
      text-align: left;
      margin: tr(68px) 0 tr(50px);
    }
    &__icon {
      margin-top: tr(160px);
      img {
        width: tr(80px);
      }
    }
    &__title {
      margin: tr(42px) 0 tr(60px);
    }
    &__content {
      line-height: tr(46px);
    }
    &__resend {
      margin-top: tr(60px);
    }
  }

  .review__footer {
    width: 100%;
    box-sizing: border-box;
    padding: 0 tr(30px);
    position: absolute;
    text-align: center;
    bottom: tr(88px);
    &__text {
      line-height: tr(46px);
      margin-top: tr(70px);
    }
  }
</style>

