<template>
  <div>
    <tf-header title="注册"></tf-header>
    <tf-wrapper>
      <div class="sign-up__content">
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
              <span class="cl-red">*&nbsp;</span>联系人
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人姓名"/>
            </span>
          </cell>
        </group>
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>手机
            </span>
            <span slot="default">
              <input type="tel" placeholder="请输入您的手机号"/>
            </span>
          </cell>
        </group>
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学校名称
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入学校名称"/>
            </span>
          </cell>
        </group>
        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学校简介
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
        
        <tf-button type="primary" size="lg" 
          @click="$router.push({ name: 'join-check-email' })">立即注册</tf-button>
      </div>
    </tf-wrapper>
  <!-- <div class="page">
    <div class="page__content join-mint-cell">
      <mt-cell title="来源">
        <i class="iconfont icon-xiala" @click="$router.push('/join/institution/source')"></i>
      </mt-cell>
      <mt-cell title="验证码">
        <div class="mint-cell-button__text">获取验证码</div>
      </mt-cell>
      <div class="form-item form-item--checkbox fz-26">
        <input type="checkbox">
        点击立即注册代表您同意
        <span class="cl-primary">《机构用户协议》</span>
      </div>
    </div> -->
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .sign-up__content{
    padding: 0 tr(30px) tr(98px);
  }
</style>
