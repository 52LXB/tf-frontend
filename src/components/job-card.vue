<template>
  <div class="tf-job-card cl-gray flexbox fz-22">
    <div class="logo fx-align-center">
      <img :src="job.logo"/>
    </div>
    <div class="main fx-space-between flex1">
      <div class="main__left fx-column">
        <span class="cl-black fz-30">{{job.institution_name}}</span>
        <span class="main__left__item fz-24 cl-gray-dark">{{job.type.type_name}}</span>
        <div class="main__left__item">
          <span>
            <i class="iconfont icon-gongzuojingyan fz-14"></i>
            {{job.experience.experience_name}}
          </span>
          <span>
            <i class="iconfont icon-xueli fz-14"></i>
            {{job.education.education_name}}
          </span>
          <span>
            <i class="iconfont icon-dingwei fz-14"></i>
            {{job.city.city_name}}
          </span>
        </div>
        <div class="main__left__item--last">
          <span class="institution-type">{{job.institution_type.institution_type_name}}</span>
          <span class="num-recruited">{{job.num_recruited.num_recruited_name}}</span>
        </div>
      </div>
      <div class="main__right fx-column">
        <span>发布时间：{{job.created_at}}</span>
        <span class="main__right__salary fz-30">{{job.salary.salary_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      job: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-job-card {
    width: 100%;
    padding: 0 tr(30px);
    box-sizing: border-box;
    background: $cl-white;
    border-bottom: 1px solid $cl-sliver-light;
    .logo {
      margin-right: tr(20px);
      img {
        width: tr(100px);
      }
    }
    .main {
      padding: tr(40px) 0 tr(25px);
      &__left {
        &__item {
          margin-top: tr(15px);
          span {
            margin-right: tr(15px);
          }
          &--last {
            margin-top: tr(15px);
            .institution-type {
              padding-right: tr(20px);
              border-right: 1px solid $cl-sliver-light;
              margin-right: tr(15px);
            }
          }
        }
      }
      &__right {
        text-align: right;
        &__salary {
          color: $cl-primary;
          margin-top: tr(30px);
        }
      }
    }
  }
</style>
