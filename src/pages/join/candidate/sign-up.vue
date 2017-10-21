<template>
  <div class="page">
    <tf-header title="注册"></tf-header>
    <tf-wrapper>
      <div class="sign-up">
        <tf-step :list="stepList" :current-index="0"></tf-step>
        <!--邮箱-->
        <group>
          <cell class="fz-30">
            <span slot="title" class="fz-30">
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
            <span slot="title" class="fz-30">
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
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>确认密码
            </span>
            <span slot="default">
              <input type="password" placeholder="请再次输入您的密码"/>
            </span>
          </cell>
        </group>
        <!--姓名-->
        <group>
          <cell class="fz-30">
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>姓名
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人姓名"/>
            </span>
          </cell>
        </group>
        <!--生日-->
        <group class="vux__datetime">
          <cell class="fz-30">
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>生日
            </span>
            <span slot="default">
              <datetime v-model="birthday"></datetime>
            </span>
          </cell>
        </group>
        <!--国籍-->
        <group>
          <cell class="fz-30">
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>国籍
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入您的国籍"/>
            </span>
          </cell>
        </group>
        <!--学历-->
        <group @click.native="showEducationType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>学历
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showEducationType" :show-cell="false" :columns="1" :data="educationTypeList" v-model="educationTypeVal"></popup-picker>
              {{ educationTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--学历签发学校-->
        <group>
          <cell  class="fz-30">
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学历签发学校
            </span>
            <span slot="default">
              <input placeholder="请输入学历签发学校"/>
            </span>
          </cell>
        </group>
        <!--教育培训证书-->
        <group @click.native="showCertificateType = true">
          <cell is-link class="fz-30 vux-cell--no-border">
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>教育培训证书
            </span>
            <span slot="default">
               <popup-picker :show.sync="showCertificateType" :show-cell="false" :columns="1" :data="certificateTypeList" v-model="certificateTypeVal"></popup-picker>
              {{ certificateTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--来源-->
        <group @click.native="showSourceType = true">
          <cell is-link class="fz-30 vux-cell--no-border">
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>来源
            </span>
            <span slot="default">
              <popup-picker :show.sync="showSourceType" :show-cell="false" :columns="1" :data="sourceTypeList" v-model="sourceTypeVal"></popup-picker>
              {{ sourceTypeSelectedName }}
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

        <tf-button type="primary" size="lg"
          @click.native="$router.push({ name: 'join-check-email' })">
          <span class="fz-36">立即注册</span>
        </tf-button>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import { Cell, Group, PopupPicker, Popup, TransferDom, Datetime } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      PopupPicker,
      Datetime,
      Popup
    },
    data () {
      return {
        showSourceType: false,
        showEducationType: false,
        showCertificateType: false,
        sourceTypeVal: ['0'],
        educationTypeVal: ['0'],
        certificateTypeVal: ['0'],
        agree: false,
        birthday: '2017-11-11',
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
        educationTypeList: [
          {
            value: '0',
            name: '学历一'
          },
          {
            value: '2',
            name: '学历二'
          },
          {
            value: '3',
            name: '学历三'
          }
        ],
        certificateTypeList: [
          {
            value: '0',
            name: '证书一'
          },
          {
            value: '2',
            name: '证书二'
          },
          {
            value: '3',
            name: '证书三'
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
      },
      educationTypeSelectedName () {
        return this.educationTypeList.find(elem => {
          return elem.value === this.educationTypeVal[0]
        }).name
      },
      certificateTypeSelectedName () {
        return this.certificateTypeList.find(elem => {
          return elem.value === this.certificateTypeVal[0]
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
