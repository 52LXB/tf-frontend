<template>
  <div>
    <tf-header title="找回密码"></tf-header>
    <tf-wrapper>
      <div class="forget-pwd">
        <div class="forget-pwd__form-item">
          <tf-input type="email" placeholder="请输入邮箱"></tf-input>
        </div>
        <div class="forget-pwd__form-item fx-space-between">
          <div class="form-item__vcode-left">
            <tf-input placeholder="请输入验证码"></tf-input>
          </div>
          <div class="form-item__vcode-right">
            <img src="http://placehold.it/80x43">
          </div>
        </div>
        <div class="forget-pwd__form-item">
          <tf-button type="primary" size="lg" 
            @click.native="$router.push({ name: 'login-reset-password' })">下一步</tf-button>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  
  .forget-pwd{
    padding: tr(60px) tr(30px);
    .forget-pwd__form-item{
      margin-bottom: tr(40px);
      .form-item__vcode-left {
        width: tr(510px);
        height: tr(86px);
        overflow: hidden;
      }
      .form-item__vcode-right{
        width: tr(160px);
        height: tr(86px);
        overflow: hidden;
      }
      .tf-btn{
        margin-top: tr(80px);
      }
    }
  }
</style>
