<template>
  <div>
    <tf-header title="重置密码"></tf-header>
    <tf-wrapper>
      <div class="reset-pwd">
        <div class="reset-pwd__form-item">
          <tf-input type="password" placeholder="请输入6-15位新登录密码"></tf-input>
        </div>
        <div class="reset-pwd__form-item fx-space-between">
          <tf-input type="password" placeholder="请再次输入新登录密码"></tf-input>
        </div>
        <div class="reset-pwd__form-item">
          <tf-button type="primary" size="lg" 
            @click.native="$router.push({ name: 'login-reset-password' })">保存</tf-button>
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

  .reset-pwd{
    padding: tr(60px) tr(30px);
    .reset-pwd__form-item{
      margin-bottom: tr(40px);
      .tf-btn{
        margin-top: tr(80px);
      }
    }
  }
</style>
