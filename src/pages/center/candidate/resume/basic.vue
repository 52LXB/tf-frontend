<template>
  <div class="page">
    <tf-header title="基础信息"></tf-header>
    <tf-wrapper>
      <div class="page__content ">
        <!--姓名-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>姓名
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入您的姓名" v-model="name"/>
            </span>
          </cell>
        </group>
        <!--性别-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>性别
            </span>
            <span slot="default">
              <tf-radio
                v-for="(item, index) in genderRadioList"
                :checked="genderRadioIsChecked(item.value)"
                :key="index"
                :label="item.name"
                @click.native="toggleGenderRadio(item.value)">
              </tf-radio>
            </span>
          </cell>
        </group>
        <!--生日-->
        <group class="vux__datetime">
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>生日
            </span>
            <span slot="default">
              <datetime v-model="candidateForm.birthday"></datetime>
            </span>
          </cell>
        </group>
        <!--国籍-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>国籍
            </span>
            <span slot="default" >
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
        <!--手机-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>手机
            </span>
            <span slot="default">
              <input type="number" placeholder="请输入您的手机号" v-model="candidateForm.phone"/>
            </span>
          </cell>
        </group>
        <!--邮箱-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>邮箱
            </span>
            <span slot="default">
              <input type="email" placeholder="请输入您的邮箱" v-model="candidateForm.email"/>
            </span>
          </cell>
        </group>
        <!--婚姻状态-->
        <group @click.native="showMarryType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span>&nbsp;&nbsp;</span>婚姻状态
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showMarryType" :show-cell="false" :columns="1" :data="marryTypeList" v-model="marryTypeVal"></popup-picker>
              {{ marryTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--所在城市-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>所在城市
            </span>
            <span slot="default">
              <input placeholder="请输入您所在的城市" />
            </span>
          </cell>
        </group>
        <!--地址-->
        <group @click.native="showAddress = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>地址
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--facebook-->
        <group>
          <cell class="fz-30">
            <span slot="title" >
              <span>&nbsp;&nbsp;</span>facebook
            </span>
            <span slot="default" >
              <input placeholder="请输入您的facebook" />
            </span>
          </cell>
        </group>
        <!--skpye-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span>&nbsp;&nbsp;</span>skpye
            </span>
            <span slot="default" >
               <input placeholder="请输入您的skpye" />
            </span>
          </cell>
        </group>
        <!--健康检查-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span>&nbsp;&nbsp;</span>健康检查
            </span>
            <span slot="default" >
              <tf-radio
                v-for="(item, index) in healthyRadioList"
                :checked="healthyRadioIsChecked(item.value)"
                :key="index"
                :label="item.name"
                @click.native="toggleHealthyRadio(item.value)">
              </tf-radio>
            </span>
          </cell>
        </group>
        <!--是否犯罪证明-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span>&nbsp;&nbsp;</span>是否犯罪证明
            </span>
            <span slot="default">
              <tf-radio
                v-for="(item, index) in crimeRadioList"
                :checked="crimeRadioIsChecked(item.value)"
                :key="index"
                :label="item.name"
                @click.native="toggleWorkPermitRadio(item.value)">
              </tf-radio>
            </span>
          </cell>
        </group>
        <!--工作许可证-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>工作许可证
            </span>
            <span slot="default">
              <tf-radio
                v-for="(item, index) in workPermitRadioList"
                :checked="workPermitRadioIsChecked(item.value)"
                :key="index"
                :label="item.name"
                @click.native="toggleCrimeRadio(item.value)">
              </tf-radio>
            </span>
          </cell>
        </group>
        <!--弹窗———地址-->
        <div v-transfer-dom>
          <popup v-model="showAddress" position="right" width="100%">
            <tf-text-page customEventLeft="true" v-on:on-left-click="showAddress = false" title="地址">
              <span slot="tf-header__right" class="fz-30">保存</span>
            </tf-text-page>
          </popup>
        </div>
        <tf-button type="primary" size="lg" class="gap-16">保存</tf-button>
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
      Popup,
      Datetime
    },
    computed: {
      name () {
        return this.candidateForm.first_name + ' ' + this.candidateForm.last_name
      },
      marryTypeSelectedName () {
        return this.marryTypeList.find(elem => {
          return elem.value === this.marryTypeVal[0]
        }).name
      },
      educationTypeSelectedName () {
        return this.educationTypeList.find(elem => {
          return elem.value === this.educationTypeVal[0]
        }).name
      }
    },
    data () {
      return {
        showGender: false,
        showAddress: false,
        showMarryType: false,
        showEducationType: false,
        marryTypeVal: ['96'],
        educationTypeVal: ['0'],
        genderRadioVal: 1,
        healthyRadioVal: 1,
        crimeRadioVal: 1,
        workPermitRadioVal: 1,
        marryTypeList: [
          {
            value: '96',
            name: '单身'
          },
          {
            value: '97',
            name: '结婚'
          },
          {
            value: '98',
            name: '离异'
          },
          {
            value: '99',
            name: '丧偶'
          },
          {
            value: '100',
            name: '其它'
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
        genderRadioList: [
          {
            value: 1,
            name: '男'
          },
          {
            value: 2,
            name: '女'
          }
        ],
        healthyRadioList: [
          {
            value: 1,
            name: '有'
          },
          {
            value: 2,
            name: '无'
          }
        ],
        crimeRadioList: [
          {
            value: 1,
            name: '有'
          },
          {
            value: 2,
            name: '无'
          }
        ],
        workPermitRadioList: [
          {
            value: 1,
            name: '有'
          },
          {
            value: 2,
            name: '无'
          }
        ],
        candidateForm: {
          'resume_id': 3,
          'first_name': 'first_name',
          'last_name': 'last_name',
          'gender': {
            'gender_id': 1,
            'gender_name': '女'
          },
          'birthday': '2017-06-01',
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
    },
    methods: {
      genderRadioIsChecked (radioVal) {
        if (radioVal === this.genderRadioVal) {
          return true
        } else {
          return false
        }
      },
      toggleGenderRadio (radioVal) {
        if (radioVal === this.genderRadioVal) {
          return
        } else {
          this.genderRadioVal = radioVal
        }
      },
      healthyRadioIsChecked (radioVal) {
        if (radioVal === this.healthyRadioVal) {
          return true
        } else {
          return false
        }
      },
      toggleHealthyRadio (radioVal) {
        if (radioVal === this.healthyRadioVal) {
          return
        } else {
          this.healthyRadioVal = radioVal
        }
      },
      crimeRadioIsChecked (radioVal) {
        if (radioVal === this.crimeRadioVal) {
          return true
        } else {
          return false
        }
      },
      toggleCrimeRadio (radioVal) {
        if (radioVal === this.crimeRadioVal) {
          return
        } else {
          this.crimeRadioVal = radioVal
        }
      },
      workPermitRadioIsChecked (radioVal) {
        if (radioVal === this.workPermitRadioVal) {
          return true
        } else {
          return false
        }
      },
      toggleWorkPermitRadio (radioVal) {
        if (radioVal === this.workPermitRadioVal) {
          return
        } else {
          this.workPermitRadioVal = radioVal
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
