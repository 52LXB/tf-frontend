<template>
  <div>
    <tf-header title="等待审核"></tf-header>
    <tf-wrapper>
      <div class="review">
        <tf-step :list="stepList" :current-index="2"></tf-step>
        <div class="review__icon">
          <img src="../../assets/img/icon-status-wait.png" />
        </div>
        <div class="review__title fz-34 cl-primary">
          等待审核
        </div>
        <div class="review__content fz-30 cl-gray">
          资料已提交，平台会在七个工作日内审核 <br/>
          审核通过后，您可立即发布职位！
        </div>
      </div>

      <div class="review__footer">
        <tf-button 
          type="primary" 
          size="lg" 
          @click.native="$router.push({ name: 'home' })">返回首页</tf-button>

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
        stepList: ['填写信息', '验证邮箱', '平台审核']
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

