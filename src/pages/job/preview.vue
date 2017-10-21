<template>
  <div class="page fz-30">
    <tf-header title="职位预览"></tf-header>
    <tf-wrapper>
      <div class="page__content">
        <div class="top fx-column-align-center">
          <div class="top__avatar fx-center">
            <img src="http://fakeimg.pl/130x130/"/>
          </div>
          <div class="top__name fz-36">{{institutionForm.name}}</div>
          <div class="top__salary fz-36">{{jobForm.salary.salary_name}}</div>
          <div class="top__welfare fz-18">
            <span class="top__welfare--cl-yellow">住宿补贴</span>
            <span class="top__welfare--cl-red">五险一金</span>
          </div>
          <div class="top__text fz-24">
            <span>{{institutionForm.type}}</span>
            <span>{{institutionForm.scale}}</span>
            <span>{{institutionForm.city}}</span>
          </div>
          <div class="top__text top__text--margin fz-24">
            <span><i class="iconfont icon-yulan"></i>66</span>
            <span>{{institutionForm.created_year}}</span>
            <span><i class="iconfont icon-yulan"></i>10</span>
          </div>
        </div>
        <div class="main">
          <div class="main__title">学校介绍</div>
          <div class="main__content">
            <div class="main__content__text">{{institutionForm.institution}}</div>
          </div>
          <div class="main__title fz-30">职位描述</div>
          <div class="main__content fz-30">
            <div class="main__content__text">{{jobForm.description}}</div>
          </div>
          <div class="main__title">职位要求</div>
          <div class="main__content">
            <div class="main__content__text">招聘人数：{{jobForm.num_recruited.num_recruited_name}}</div>
            <div class="main__content__text">入职日期：{{jobForm.due_date}}</div>
            <div class="main__content__text">工作经验：{{jobForm.experience.experience_name}}人</div>
            <div class="main__content__text">学历：{{jobForm.education.education_name}}</div>
            <div class="main__content__text">年龄: {{jobForm.age}}</div>
            <div class="main__content__text">性别: {{jobForm.gender.gender_name}}</div>
          </div>
          <div class="main__footer fx-space-between gap-16">
            <tf-button type="primary" size="md"  @click.native="$router.push('/job/create')">
              <span class="fz-30">继续发布职位</span>
            </tf-button>
            <tf-button type="primary" size="md" @click.native="$router.push('/job/management')">
              <span class="fz-30">职位管理</span>
            </tf-button>
          </div>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        institutionForm: {
          'user_id': '57',
          'name': '机构名称',
          'type': '公立',
          'scale': '100-200人',
          'city': '杭州',
          'address': '杭州市滨江区恒鑫大厦',
          'contact': 'cc',
          'phone': '1110',
          'telphone': null,
          'email': '2383894793@qq.com',
          'institution': '新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村，是规模最大的综合性教育集团，同时也是教育培训集团。新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村。',
          'website': 'www.xingdongfang.com',
          'recruit_permit': null,
          'num_recruited': null,
          'check_status': '2',
          'check_description': '',
          'source_knowus': '3',
          'source_knowus_other': null,
          'select_reason': '2',
          'titile': 'http://fakeimg.pl/130x130/',
          'img': [
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/'
          ],
          'created_year': '2001'
        },
        jobForm: {
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
          },
          'description': '新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村，是规模最大的综合性教育集团，同时也是教育培训集团。新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村。'
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
        background-image: url('../../assets/img/common/personal_center_background.jpg');
        background-size: 100% 100%;
        color: $cl-white-dark;
        &__avatar {
          width: tr(130px);
          height: tr(130px);
          margin-top: tr(60px);
          img {
            width: tr(130px);
            height: tr(130px);
            background: $cl-gray;
            overflow: hidden;
          }
        }
        &__name {
          margin-top: tr(20px);
        }
        &__salary {
          margin-top: tr(15px);
          &__location {
            display: inline-block;
            background: $cl-yellow;
          }
        }
        &__welfare {
          margin-top: tr(15px);
          span {
            display: inline-block;
            padding: tr(5px);
            margin: 0 tr(15px);
          }
          &--cl-yellow {
            background: $cl-yellow;
          }
          &--cl-red {
            background: $cl-red-light;
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
          &--margin {
             margin-top: tr(10px);
          }
        }
      }
      .main {
        padding: 0 tr(30px) tr(60px);
        &__title {
          padding-top: tr(10px);
          height: tr(90px);
          line-height: tr(90px);
          color: $cl-black;
          border-bottom: tr(1px) solid $cl-sliver-light;
        }
        &__content {
          padding-top: tr(40px);
          overflow: hidden;
          &__text {
            color: $cl-gray;
            line-height: tr(54px);
          }
        }
        &__imgs {
          box-sizing: content-box;
          width: 100%;
          height: tr(158px);
          padding-top: tr(10px);
          white-space: nowrap;
          overflow-y: hidden;
          overflow-x: scroll;
          &__item {
            width: tr(158px);
            height: tr(158px);
            margin-right: tr(20px);
          }
        }
        &__imgs::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
</style>
