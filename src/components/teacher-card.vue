<template>
  <div class="tf-teacher-card cl-gray flexbox fz-22">
    <div class="logo fx-align-center">
      <div class="logo__inner fx-center">
        <img :src="teacher.headImg"/>
      </div>
    </div>
    <div class="main fx-space-between flex1">
      <div class="main__left fx-column">
        <span class="cl-black fz-30">{{teacherName}}</span>
        <span class="main__left__item fz-24 cl-gray-dark">{{teacher.job_type[1].job_type_name}}</span>
        <div class="main__left__item">
          <span>
            <i class="iconfont icon-gongzuojingyan fz-14"></i>
            {{teacher.experience.experience_name}}
          </span>
          <span>
            <i class="iconfont icon-xueli fz-14"></i>
            {{teacher.education.education_name}}
          </span>
          <span>
            <i class="iconfont icon-dingwei fz-14"></i>
            {{teacher.location.location_name}}
          </span>
        </div>
      </div>
      <div class="main__right fx-column">
        <span>更新时间：10:00:00</span>
        <span class="main__right__salary fz-30">{{teacher.salary.salary_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      teacher: {
        type: Array
      }
    },
    computed: {
      teacherName () {
        return this.teacher.first_name + ' ' + this.teacher.last_name
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-teacher-card {
    width: 100%;
    padding: 0 tr(30px);
    box-sizing: border-box;
    background: $cl-white;
    border-bottom: 1px solid $cl-sliver-light;
    .logo {
      &__inner {
        width: tr(100px);
        height: tr(100px);
        margin-right: tr(20px);
        border-radius: 100%;
        img {
          width: tr(100px);
          border-radius: 100%;
        }
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
