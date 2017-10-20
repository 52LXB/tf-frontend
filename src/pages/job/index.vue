<template>
  <div class="page fz-30">
    <tf-topbar></tf-topbar>
    <tf-wrapper :hasBackground="false">
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
          <div class="recommend__title">推荐职位</div>
          <div class="fx-space-between">
            <div class="recommend__card">
              <img src="http://fakeimg.pl/400x400/000033/"/>
              <div>ESL</div>
              <div class="fz-22 cl-gray">ESL讲师</div>
              <div class="fz-22 cl-gray">
                <span>朝阳</span>
                <span> 5K～8K</span>
              </div>
            </div>
            <div class="recommend__card">
              <img src="http://fakeimg.pl/400x400/000033/"/>
              <div>ESL</div>
              <div class="fz-22 cl-gray">ESL讲师</div>
              <div class="fz-22 cl-gray">
                <span>朝阳</span>
                <span> 5K～8K</span>
              </div>
            </div>
            <div class="recommend__card">
              <img src="http://fakeimg.pl/400x400/000033/"/>
              <div>ESL</div>
              <div class="fz-22 cl-gray">ESL讲师</div>
              <div class="fz-22 cl-gray">
                <span>朝阳</span>
                <span> 5K～8K</span>
              </div>
            </div>
          </div>
        </div>
        <div class="banner">
          <img src="http://fakeimg.pl/750x200/000033/"/>
        </div>
        <div class="filter fx-column-align-center">
          <div class="filter__box">
            <tf-filter-box></tf-filter-box>
          </div>
          <div class="filter__tab">
            <tab :line-width=5 active-color='#7da027' v-model="index" >
              <tab-item class="vux-center" :selected="demoSelected === item" v-for="(item, index) in tabList" @click="demoSelected = item" :key="index">{{item}}</tab-item>
            </tab>
          </div>
        </div>
        <div v-for="job in jobForm" class="job-card">
          <tf-job-card :job="job"></tf-job-card>
        </div>
      </div>
      <div class="page__footer cl-gray fx-center fz-22">
        已显示全部
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import Filter from '@/components/filter'
  import FilterBox from '@/components/filter-box'
  import JobCard from '@/components/job-card'

  export default {
    components: {
      'tf-filter': Filter,
      'tf-filter-box': FilterBox,
      'tf-job-card': JobCard,
      Tab,
      TabItem
    },
    data () {
      return {
        tabList: ['默认', '最新', '全部'],
        getBarWidth: function (index) {
          return '1.5rem'
        },
        jobForm: [
          {
            'name': '11',
            'job_id': 89,
            'city': {
              'city_id': 123,
              'city_name': '营口市'
            },
            'job_type': {
              'job_type_id': 129,
              'job_type_name': '全职'
            },
            'salary': {
              'salary_id': 44,
              'salary_name': '15-20k'
            },
            'education': {
              'education_id': 57,
              'education_name': '学士'
            },
            'age': 68,
            'gender': {
              'gender_id': 75,
              'gender_name': '不限'
            },
            'type': {
              'type_id': 27,
              'type_name': 'ESL'
            },
            'due_date': 1513987200,
            'institution_name': '英孚教育',
            'num_recruited': {
              'num_recruited_id': 1,
              'num_recruited_name': '100-200人'
            },
            'experience': {
              'experience_id': 52,
              'experience_name': '3年'
            },
            'created_at': '10:00:00',
            'logo': 'http://fakeimg.pl/400x400/000033/',
            'institution_type': {
              'institution_type_id': 10,
              'institution_type_name': '私立'
            }
          },
          {
            'name': '11',
            'job_id': 89,
            'city': {
              'city_id': 123,
              'city_name': '营口市'
            },
            'job_type': {
              'job_type_id': 129,
              'job_type_name': '全职'
            },
            'salary': {
              'salary_id': 44,
              'salary_name': '15-20k'
            },
            'education': {
              'education_id': 57,
              'education_name': '学士'
            },
            'age': 68,
            'gender': {
              'gender_id': 75,
              'gender_name': '不限'
            },
            'type': {
              'type_id': 27,
              'type_name': 'ESL'
            },
            'due_date': 1513987200,
            'institution_name': '英孚教育',
            'num_recruited': {
              'num_recruited_id': 1,
              'num_recruited_name': '100-200人'
            },
            'experience': {
              'experience_id': 52,
              'experience_name': '3年'
            },
            'created_at': '10:00:00',
            'logo': 'http://fakeimg.pl/400x400/000033/',
            'institution_type': {
              'institution_type_id': 10,
              'institution_type_name': '私立'
            }
          },
          {
            'name': '11',
            'job_id': 89,
            'city': {
              'city_id': 123,
              'city_name': '营口市'
            },
            'job_type': {
              'job_type_id': 129,
              'job_type_name': '全职'
            },
            'salary': {
              'salary_id': 44,
              'salary_name': '15-20k'
            },
            'education': {
              'education_id': 57,
              'education_name': '学士'
            },
            'age': 68,
            'gender': {
              'gender_id': 75,
              'gender_name': '不限'
            },
            'type': {
              'type_id': 27,
              'type_name': 'ESL'
            },
            'due_date': 1513987200,
            'institution_name': '英孚教育',
            'num_recruited': {
              'num_recruited_id': 1,
              'num_recruited_name': '100-200人'
            },
            'experience': {
              'experience_id': 52,
              'experience_name': '3年'
            },
            'created_at': '10:00:00',
            'logo': 'http://fakeimg.pl/400x400/000033/',
            'institution_type': {
              'institution_type_id': 10,
              'institution_type_name': '私立'
            }
          },
          {
            'name': '11',
            'job_id': 89,
            'city': {
              'city_id': 123,
              'city_name': '营口市'
            },
            'job_type': {
              'job_type_id': 129,
              'job_type_name': '全职'
            },
            'salary': {
              'salary_id': 44,
              'salary_name': '15-20k'
            },
            'education': {
              'education_id': 57,
              'education_name': '学士'
            },
            'age': 68,
            'gender': {
              'gender_id': 75,
              'gender_name': '不限'
            },
            'type': {
              'type_id': 27,
              'type_name': 'ESL'
            },
            'due_date': 1513987200,
            'institution_name': '英孚教育',
            'num_recruited': {
              'num_recruited_id': 1,
              'num_recruited_name': '100-200人'
            },
            'experience': {
              'experience_id': 52,
              'experience_name': '3年'
            },
            'created_at': '10:00:00',
            'logo': 'http://fakeimg.pl/400x400/000033/',
            'institution_type': {
              'institution_type_id': 10,
              'institution_type_name': '私立'
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    width: 10rem;
    min-height: 100vh;
    color: $cl-gray-dark;
    position: relative;
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
          img {
            margin: tr(30px) 0;
            width: tr(120px);
            height: tr(120px);
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
        margin: tr(20px) 0;
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
            span {
              display: inline-block;
              box-sizing: border-box;
              line-height: tr(70px);
            }
          }
        }
      }
      .job-list {
        width: 100%;
      }
    }
    .filter-page {
      width: 10rem;
      min-height: 100vh;
    }
    &__footer {
      height: tr(80px);
    }
  }
</style>
