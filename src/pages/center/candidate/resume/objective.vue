<template>
  <div class="page">
    <tf-deputy-topbar title="Objective"></tf-deputy-topbar>
    <div class="page__content join-mint-cell">
      <mt-cell title="期望职位类型">
        <div class="mint-cell-value-text">{{candidateForm.job_property_name}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="期望工作地点">
        <div class="mint-cell-value-text">{{candidateForm.location.location_name}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="期望薪水">
        <div class="mint-cell-value-text">{{candidateForm.salary.salary_name}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="职位属性">
        <div class="mint-cell-value-text">{{candidateForm.job_property.job_property_name}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="到岗时间">
        <div class="mint-cell-value-text">{{candidateForm.availability.availability_name}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="目前工作状态">
        <div class="mt-cell-radio cl-black">
          <i class="iconfont icon-yuanhuan"></i>已婚
          <i class="iconfont icon-xuanzeqiyuanhuan"></i>未婚
        </div>
      </mt-cell>
      <button class="page__content__button btn btn--lg" @click="$router.push('/join/check-email')">保 存</button>
    </div>
  </div>
</template>

<script>
  import deputyTopbar from '@/components/deputy-topbar.vue'

  export default {
    components: {
      'tf-deputy-topbar': deputyTopbar
    },
    data () {
      return {
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
