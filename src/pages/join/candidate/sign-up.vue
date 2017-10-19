<template>
  <div>
    <tf-header title="注册"></tf-header>
    <tf-wrapper>
      <div class="sign-up">
        <tf-step :list="stepList" :current-index="0"></tf-step>
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>邮箱
            </span>
            <span slot="default">
              <input type="email" placeholder="请输入您的邮箱"/>
            </span>
          </cell>
        </group>
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>密码
            </span>
            <span slot="default">
              <input type="password" placeholder="请输入您的密码"/>
            </span>
          </cell>
        </group>
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>确认密码
            </span>
            <span slot="default">
              <input type="password" placeholder="请再次输入您的密码"/>
            </span>
          </cell>
        </group>
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>姓名
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人姓名"/>
            </span>
          </cell>
        </group>
        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>生日
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>国籍
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入您的国籍"/>
            </span>
          </cell>
        </group>
        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学历
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学历签发学校
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>教育培训证书
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>来源
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>验证码
            </span>
            <span slot="default">
              <div class="fx-space-between fx-align-center form-vcode">
                <div class="form-vcode__input">
                  <tf-input type="text" :no-border="true"/>
                </div>
                <p class="form-vcode__split">&nbsp;|&nbsp;</p>
                <p class="fz-30 form-vcode__send">获取验证码</p>
              </div>
            </span>
          </cell>
        </group>

        <div class="form-remember-pwd fx-align-center fz-26">
          <tf-checkbox :checked="agree" @click.native="agree = !agree"></tf-checkbox>
          <span class="cl-gray-dark">点击立即注册代表您同意</span>
          <span class="cl-primary">《机构用户协议》</span>
        </div>
        
        <tf-button type="primary" size="lg" 
          @click.native="$router.push({ name: 'join-check-email' })">立即注册</tf-button>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import { Cell, Group, PopupPicker, Popup, TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      PopupPicker,
      Popup
    },
    data () {
      return {
        agree: false,
        stepList: ['填写信息', '验证邮箱', '平台审核']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .sign-up {
    padding: 0 tr(30px) tr(30px);
    .tf-step {
      margin: tr(68px) 0 tr(50px);
    }
    .form-vcode {
      &__input {
        .tf-input{
          padding: 0;
          height: tr(54px);
        }
      }
      &__split {
        color: #CCCCCC !important;
      }
      &__send {
        color: $cl-primary !important;
      }
    }
    .form-remember-pwd{
      height: tr(100px);
      padding-bottom: tr(20px);
    }
  }
</style>
