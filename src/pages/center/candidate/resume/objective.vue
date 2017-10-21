<template>
  <div class="page">
    <tf-header title="Objective"></tf-header>
    <tf-wrapper>
      <div class="page__content">
        <!--期望职位类型-->
        <group @click.native="showJobType = true">
          <cell is-link  class="fz-30">
            <span slot="title">
              <span>&nbsp;&nbsp;</span>期望职位类型
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showJobType" :show-cell="false" :columns="1" :data="JobTypeList" v-model="JobTypeSelectedVal"></popup-picker>
              {{jobTypeSelectedName}}
            </span>
          </cell>
        </group>
        <!--期望工作地点-->
        <group @click.native="showJobLocation = true">
          <cell class="fz-30">
            <span slot="title">
              <span>&nbsp;&nbsp;</span>期望工作地点
            </span>
            <span slot="default" class="vux-address">
              <x-address v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
            </span>
          </cell>
        </group>
        <!--期望薪水-->
        <group @click.native="showSalaryType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>期望薪水
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showSalaryType" :show-cell="false" :columns="1" :data="salaryTypeList" v-model="salaryTypeSelectedVal"></popup-picker>
              {{ salaryTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--职位属性-->
        <group @click.native="showJobPropertyType = true">
          <cell is-link class="fz-30">
            <span slot="title" >
              <span class="cl-red">*&nbsp;</span>职位属性
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showJobPropertyType" :show-cell="false" :columns="1" :data="jobPropertyTypeList" v-model="jobPropertyTypeVal"></popup-picker>
              {{ jobPropertyTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--到岗时间-->
        <group @click.native="showAvailabilitylType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>到岗时间
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showAvailabilitylType" :show-cell="false" :columns="1" :data="availabilityTypeList" v-model="availabilityTypeVal"></popup-picker>
              {{ availabilityTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--目前工作状态-->
        <group @click.native="showJobStatusType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>目前工作状态
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showJobStatusType" :show-cell="false" :columns="1" :data="jobStatusTypeList" v-model="jobStatusTypeVal"></popup-picker>
              {{ jobStatusTypeSelectedName }}
            </span>
          </cell>
        </group>
        <tf-button type="primary" size="lg" class="gap-16">保存</tf-button>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import { Cell, Group, PopupPicker, Popup, TransferDom, XAddress, ChinaAddressData } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      PopupPicker,
      Popup,
      XAddress,
      ChinaAddressData
    },
    data () {
      return {
        showJobType: false,
        showJobLocation: false,
        showSalaryType: false,
        showJobPropertyType: false,
        showAvailabilitylType: false,
        showJobStatusType: false,
        jobTypeSelectedVal: ['1'],
        salaryTypeSelectedVal: ['1'],
        jobPropertyTypeVal: ['1'],
        availabilityTypeVal: ['1'],
        jobStatusTypeVal: ['1'],
        JobTypeList: [
          {
            value: '1',
            name: '职位类型一'
          },
          {
            value: '2',
            name: '职位类型二'
          },
          {
            value: '3',
            name: '职位类型三'
          }
        ],
        salaryTypeList: [
          {
            value: '1',
            name: '期望薪水一'
          },
          {
            value: '2',
            name: '期望薪水二'
          },
          {
            value: '3',
            name: '期望薪水三'
          }
        ],
        jobPropertyTypeList: [
          {
            value: '1',
            name: '职位属性一'
          },
          {
            value: '2',
            name: '职位属性二'
          },
          {
            value: '3',
            name: '职位属性三'
          }
        ],
        availabilityTypeList: [
          {
            value: '1',
            name: '到岗时间一'
          },
          {
            value: '2',
            name: '到岗时间二'
          },
          {
            value: '3',
            name: '到岗时间三'
          }
        ],
        jobStatusTypeList: [
          {
            value: '1',
            name: '工作状态一'
          },
          {
            value: '2',
            name: '工作状态二'
          },
          {
            value: '3',
            name: '工作状态三'
          }
        ],
        addressData: ChinaAddressData,
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
    },
    computed: {
      jobTypeSelectedName () {
        return this.JobTypeList.find(elem => {
          return elem.value === this.jobTypeSelectedVal[0]
        }).name
      },
      salaryTypeSelectedName () {
        return this.salaryTypeList.find(elem => {
          return elem.value === this.salaryTypeSelectedVal[0]
        }).name
      },
      jobPropertyTypeSelectedName () {
        return this.jobPropertyTypeList.find(elem => {
          return elem.value === this.jobPropertyTypeVal[0]
        }).name
      },
      availabilityTypeSelectedName () {
        return this.availabilityTypeList.find(elem => {
          return elem.value === this.availabilityTypeVal[0]
        }).name
      },
      jobStatusTypeSelectedName () {
        return this.jobStatusTypeList.find(elem => {
          return elem.value === this.jobStatusTypeVal[0]
        }).name
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    width: 10rem;
    min-height: 100vh;
    background: $cl-white;
    &__content {
      padding: tr(15px) tr(30px) tr(80px);
      &__button {
        width: 100%;
        margin-top: tr(80px);
      }
    }
  }
</style>
