<template>
  <div>
    <tf-header title="验证邮箱"></tf-header>
    <tf-wrapper>
      <div class="check-email">
        <tf-step :list="stepList" :current-index="1"></tf-step>
        <div class="check-email__icon">
          <img src="../../assets/img/icon-status-ok.png" />
        </div>
        <div class="check-email__title fz-34 cl-primary">
          提交成功
        </div>
        <div class="check-email__content fz-30 cl-gray">
          提交成功！还差一步邮箱验证就注册成功啦！<br/> 
          请在72小时内移步weilaiedu@163.com<br/> 
          邮箱进行验证 
        </div>
        <div class="check-email__resend fz-30 cl-gray">
          没有收到邮件？
          <span class="cl-primary" @click="$router.push({ name: 'join-review' })">重新发送</span>
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
  .check-email {
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
</style>

