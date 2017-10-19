<template>
  <div>
    <tf-header title="登录"></tf-header>
    <tf-wrapper>
      <div class="login">
        <div class="login__logo">
          <img src="../../assets/img/index/login_logo.png"/>
        </div>
        <div class="login__form">
          <div class="login__form-item">
            <tf-input type="email" placeholder="请输入邮箱"></tf-input>
          </div>
          <div class="login__form-item">
            <tf-input type="password" placeholder="请输入6-15位的密码"></tf-input>
          </div>

          <div class="login__form-item fx-space-between">
            <div class="form-item__vcode-left">
              <tf-input placeholder="请输入验证码"></tf-input>
            </div>
            <div class="form-item__vcode-right">
              <img src="http://placehold.it/80x43">
            </div>
          </div>

          <div class="login__form-item">
            <tf-checkbox
              :checked="rememberPwd"
              label="记住密码"
              @click.native="rememberPwd = !rememberPwd"></tf-checkbox>
          </div>

          <div class="login__form-item">
            <tf-button type="primary" size="lg">登录</tf-button>
          </div>
        </div>
        <div class="fx-space-between">
          <span class="fz-26 cl-gray" 
            @click="$router.push({ name: 'login-forget-password' })">
            忘记密码
          </span>

          <span class="fz-26 cl-gray"
            @click="$router.push({ name: 'join' })">
            立即注册
          </span>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rememberPwd: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .login{
    padding: tr(30px);
    .login__logo{
      text-align: center;
      margin: tr(100px) 0;
      img{
        width: tr(227px);
      }
    }
    .login__form{
      .login__form-item{
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
      }
    }
  }
</style>
