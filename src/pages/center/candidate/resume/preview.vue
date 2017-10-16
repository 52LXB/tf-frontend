<template>
  <div class="page fx-column fz-30">
    <tf-deputy-topbar title="查看简历"></tf-deputy-topbar>
    <div class="page__content fx-column">
      <div class="top fx-column-align-center">
        <div class="top__avatar">
          <img src="http://fakeimg.pl/130x130/"/>
        </div>
        <div class="top__name fz-36 cl-white-dark">
          求职者名字
        </div>
        <div class="top__icon-wrapper">
          <i class="iconfont icon-touxiang fz-48"></i>
          <i class="iconfont icon-shoucang fz-48"></i>
        </div>
        <div class="top__text fz-24">
          <span>{{candidateForm.gender.gender_name}}</span>
          <span>{{candidateForm.age}}岁</span>
          <span>{{candidateForm.is_married.is_married_name}}</span>
          <span>{{candidateForm.nationality.nationality_name}}</span>
        </div>
        <div class="top__text fz-24">
          <span>{{candidateForm.education.education_name}}</span>
          <span>{{candidateForm.experience.experience_name}}年以上工作经验</span>
          <span>{{candidateForm.address}}</span>
        </div>
      </div>
      <div class="main flex1">
        <div class="card">
          <div class="card__title">
            <i class="iconfont icon-objective fz-36"></i>
            Objective
          </div>
          <div class="card__content fx-column">
            <span>期望职位类型：</span>
            <span>期望工作地点：{{candidateForm.location.location_name}}</span>
            <span>期望薪水：{{candidateForm.salary.salary_name}}</span>
            <span>职位属性：{{candidateForm.job_property.job_property_name}}</span>
            <span>到岗时间：{{candidateForm.availability.availability_name}}</span>
            <span>目前工作状态：{{candidateForm.job_status.job_status_name}}</span>
            <span v-if="candidateForm.health_check">健康检查：{{candidateForm.health_check}}</span>
          </div>
        </div>
        <div class="card" v-if="candidateForm.education_background">
          <div class="card__title">
            <i class="iconfont icon-qiuzhizhe fz-36"></i>
            教育经历
          </div>
          <div class="card__content">{{candidateForm.education_background}}</div>
        </div>
        <div class="card" v-if="candidateForm.experience_background">
          <div class="card__title">
            <i class="iconfont icon-gongzuobeijing fz-36"></i>
            工作背景
          </div>
          <div class="card__content">{{candidateForm.experience_background}}</div>
        </div>
        <div class="card" v-if="candidateForm.certificate_background">
          <div class="card__title">
            <i class="iconfont icon-jinengzhengshu fz-36"></i>
            技能证书
          </div>
          <div class="card__content">{{candidateForm.certificate_background}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import deputyTopbar from '@/components/deputy-topbar.vue'

  export default {
    components: {
      'tf-deputy-topbar': deputyTopbar
    },
    computed: {
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
      flex: 1;
      .top {
        width: 100%;
        height: tr(475px);
        background-image: url('../../../../assets/img/common/personal_center_background.jpg');
        background-size: 100% 100%;
        color: $cl-white-dark;
        position: relative;
        &__icon-wrapper {
          margin-top: tr(10px);
          i {
            padding: 0 tr(40px);
            border-right: tr(1px) rgba(229, 229, 229, 0.8) solid;
          }
          i:last-child {
            border: none;
          }
        }
        &__avatar {
          width: tr(130px);
          height: tr(130px);
          padding: tr(60px) 0 tr(40px) 0;
          border-radius: 100%;
          img {
            width: tr(130px);
            height: tr(130px);
            background: $cl-gray;
            overflow: hidden;
            border-radius: 100%;
          }
        }
        &__text {
          margin-top: tr(20px);
          span {
            padding: 0 tr(20px);
            border-right: tr(1px) rgba(229, 229, 229, 0.8) solid;
          }
          span:last-child {
            border: none;
          }
        }
      }
      .main {
        background: $cl-white-dark;
        padding-bottom: tr(20px);
        .card {
          background: $cl-white;
          margin-bottom: tr(20px);
          padding: 0 tr(30px);
          &__title {
            height: tr(95px);
            line-height: tr(95px);
            color: $cl-black;
            border-bottom: tr(1px) solid $cl-sliver-light;
            vertical-align: top;
            i {
              color: $cl-primary;
            }
          }
          &__content {
            padding: tr(30px) 0 tr(40px);
            color: $cl-gray-dark;
            line-height: tr(54px);
          }
        }
      }
    }
  }
</style>
