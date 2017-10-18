<template>
  <div class="page">
    <tf-header></tf-header>
    <tf-wrapper>
      <div class="page__content">
        <!--姓名-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>姓名
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入您的姓名" v-model="name"/>
            </span>
          </cell>
        </group>
        <!--性别-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>性别
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--生日-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>生日
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--国籍-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>国籍
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--学历-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学历
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--手机-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>手机
            </span>
            <span slot="default">
              <input type="number" placeholder="请输入您的手机号" v-model="candidateForm.phone"/>
            </span>
          </cell>
        </group>
        <!--邮箱-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>邮箱
            </span>
            <span slot="default">
              <input type="email" placeholder="请输入您的邮箱" v-model="candidateForm.email"/>
            </span>
          </cell>
        </group>
        <!--婚姻状态-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span>&nbsp;&nbsp;</span>婚姻状态
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--所在城市-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red-light">*&nbsp;</span>所在城市
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--地址-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red-light">*&nbsp;</span>地址
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--facebook-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span>&nbsp;&nbsp;</span>facebook
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--skpye-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span>&nbsp;&nbsp;</span>skpye
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--健康检查-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span>&nbsp;&nbsp;</span>健康检查
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--是否犯罪证明-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span>&nbsp;&nbsp;</span>是否犯罪证明
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--工作许可证-->
        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red-light">*&nbsp;</span>工作许可证
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <tf-button type="primary" size="lg" class="gap-16">保存</tf-button>
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
    computed: {
      name () {
        return this.candidateForm.first_name + ' ' + this.candidateForm.last_name
      }
    },
    data () {
      return {
        showGender: false,
        candidateForm: {
          'resume_id': 3,
          'first_name': 'first_name',
          'last_name': 'last_name',
          'gender': {
            'gender_id': 1,
            'gender_name': '女'
          },
          'birthday': 123,
          'nationality': {
            'nationality_id': 1,
            'nationality_name': '美国'
          },
          'education': {
            'education_id': 1,
            'education_name': '硕士'
          },
          'phone': '123',
          'email': 'email1111111@12.com',
          'address': '杭州',
          'faceBook': null,
          'health_check': null,
          'criminal_check': null,
          'work_permit': 1,
          'is_married': {
            'is_married_id': 96,
            'is_married_name': '未婚'
          },
          'Skype': null,
          'job_type': [
            {
              'job_type_id': 31,
              'job_type_name': 'Manager'
            },
            {
              'job_type_id': 32,
              'job_type_name': 'ESL'
            }
          ],
          'location': {
            'location_id': 122,
            'location_name': '杭州'
          },
          'salary': {
            'salary_id': 112,
            'salary_name': '20-25k'
          },
          'job_property': {
            'job_property_id': 116,
            'job_property_name': 'Part time'
          },
          'availability': {
            'availability_id': 122,
            'availability_name': '一个月'
          },
          'job_status': {
            'job_status_id': 125,
            'job_status_name': 'Demission'
          },
          'education_background': '浙江大学计算机硕士浙江大学计算机硕士浙江大学计算机硕士浙江大学计算机硕士',
          'experience_background': '阿里巴巴工作3年',
          'certificate_background': '教育资格职业证书',
          'experience': {
            'experience_id': 136,
            'experience_name': '4'
          },
          'headImg': '',
          'age': 18
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    &__content {
      padding: tr(15px) tr(30px) tr(80px);
      &__button {
        width: 100%;
        margin-top: tr(80px);
      }
    }
  }
</style>
