<template>
  <div>
    <tf-header title="注册"></tf-header>
    <tf-wrapper>
      <div class="sign-up">
        <tf-step :list="stepList" :current-index="0"></tf-step>
        <!--邮箱-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>邮箱
            </span>
            <span slot="default">
              <input type="email" placeholder="请输入您的邮箱"/>
            </span>
          </cell>
        </group>
        <!--密码-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>密码
            </span>
            <span slot="default">
              <input type="password" placeholder="请输入您的密码"/>
            </span>
          </cell>
        </group>
        <!--确认密码-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>确认密码
            </span>
            <span slot="default">
              <input type="password" placeholder="请再次输入您的密码"/>
            </span>
          </cell>
        </group>
        <!--联系人-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>联系人
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人姓名"/>
            </span>
          </cell>
        </group>
        <!--手机-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>手机
            </span>
            <span slot="default">
              <input type="tel" placeholder="请输入您的手机号"/>
            </span>
          </cell>
        </group>
        <!--学校名称-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>学校名称
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入学校名称"/>
            </span>
          </cell>
        </group>
        <!--学校简介-->
        <group @click.native="showSchoolIntro = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>学校简介
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <!--来源-->
        <group @click.native="showSourceType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>来源
            </span>
            <span slot="default">
              <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showSourceType" :show-cell="false" :columns="1" :data="sourceTypeList" v-model="sourceTypeVal"></popup-picker>
              {{ sourceTypeSelectedName }}
            </span>
            </span>
          </cell>
        </group>
        <!--验证码-->
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
        <!--弹窗———学校简介-->
        <div v-transfer-dom>
          <popup v-model="showSchoolIntro" position="right" width="100%">
            <tf-text-page customEventLeft="true" v-on:on-left-click="showSchoolIntro = false" title="学校简介">
              <span slot="tf-header__right" class="fz-30">保存</span>
            </tf-text-page>
          </popup>
        </div>
        <tf-button type="primary" size="lg"
          @click.native="$router.push({ name: 'join-check-email' })">
          <span class="fz-36">立即注册</span>
        </tf-button>
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
        showSchoolIntro: false,
        showSourceType: false,
        sourceTypeVal: ['0'],
        agree: false,
        sourceTypeList: [
          {
            value: '0',
            name: '来源一'
          },
          {
            value: '1',
            name: '来源二'
          },
          {
            value: '2',
            name: '来源三'
          }
        ],
        stepList: ['填写信息', '验证邮箱', '平台审核']
      }
    },
    computed: {
      sourceTypeSelectedName () {
        return this.sourceTypeList.find(elem => {
          return elem.value === this.sourceTypeVal[0]
        }).name
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
