<template>
  <div class="page fz-30">
    <tf-topbar></tf-topbar>
    <tf-wrapper :hasBackground='false'>
      <div class="page__banner">
        <mt-swipe :auto="4000" class="page__mt-swipe">
          <mt-swipe-item><img src="../../assets/img/banner/index_banner.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/img/banner/job_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/img/banner/teacher_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/img/banner/vip_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/img/banner/FTP_banner.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="page__content">
        <div class="recommend">
          <div class="recommend__title">推荐教师</div>
          <div class="fx-space-between">
            <div v-for="item in 3" class="recommend__card">
              <div class="recommend__card__logo fx-center">
                <img src="http://fakeimg.pl/400x400/000033/"/>
              </div>
              <div>刘芳菲</div>
              <div class="fz-22 cl-gray gap-2">TOFEL讲师</div>
              <div class="fz-22 cl-gray gap-2">
                <span>朝阳</span>
                <span> 5K～8K</span>
              </div>
            </div>
          </div>
        </div>
        <div class="filter fx-column-align-center">
          <div class="filter__box">
            <tf-filter-box></tf-filter-box>
          </div>
          <div class="filter__tab flexbox">
            <div class="filter__tab__item fx-center">默认</div>
            <div class="filter__tab__item fx-center">最新</div>
            <div class="filter__tab__item fx-center">全部</div>
          </div>
        </div>
        <div v-for="candidate in candidateForm" class="job-card">
          <tf-teacher-card :teacher="candidate"></tf-teacher-card>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import FilterBox from '@/components/filter-box'
  import tfTeacherCard from '@/components/teacher-card'

  export default {
    components: {
      'tf-filter-box': FilterBox,
      tfTeacherCard
    },
    data () {
      return {
        candidateForm: [
          {
            'resume_id': 3,
            'first_name': 'Tom',
            'last_name': 'Han',
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
            'headImg': 'http://fakeimg.pl/400x400/000033/',
            'age': 18
          },
          {
            'resume_id': 3,
            'first_name': 'Tom',
            'last_name': 'Han',
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
            'headImg': 'http://fakeimg.pl/400x400/000033/',
            'age': 18
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    color: $cl-gray-dark;
    &__banner {
      width: 100%;
      height: tr(375px);
      img {
        width: 100%;
      }
    }
    &__content {
      .recommend {
        margin-bottom: tr(25px);
        &__title {
          height: tr(70px);
          line-height: tr(70px);
          margin-left: tr(30px);
        }
        &__card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: tr(235px);
          height: tr(340px);
          background: $cl-white;
          &__logo {
            width: tr(150px);
            height: tr(150px);
            margin: tr(30px) 0;
            border-radius: 100%;
            img {
              width: tr(150px);
              height: tr(150px);
              border-radius: 100%;
            }
          }
        }
      }
      .banner {
        height: tr(200px);
        img {
          width: 100%;
          height: tr(200px);
        }
      }
      .filter {
        margin: tr(30px) 0 tr(20px);
        background: $cl-white;
        &__box {
          margin: tr(20px);
          width: tr(690px);
        }
        &__tab {
          width: 100%;
          height: tr(70px);
          margin-top: tr(20px);
          &__item {
            flex: 1;
          }
        }
      }
      .job-list {
        width: 100%;
      }
    }
  }
</style>
