<template>
  <div class="page">
    <tf-header title="我的简历">
      <span slot="tf-header__right" class="fz-30" @click="$router.push('/center/candidate/resume/preview')">预览</span>
    </tf-header>
    <tf-wrapper>
      <div class="page__content join-mint-cell">
        <group @click.native="showPopupSchoolIntro = true">
          <cell is-link>
            <span slot="title" class="fz-30">
              学校简介
            </span>
            <span slot="default"></span>
          </cell>
        </group>
      </div>
      <div class="page__content join-mint-cell" v-show="false">
        <mt-cell title="基础消息">
          <i class="iconfont icon-back-right" @click="$router.push('/center/candidate/resume/basic')"></i>
        </mt-cell>
        <mt-cell title="Objective">
          <i class="iconfont icon-back-right" @click="$router.push('/center/candidate/resume/objective')"></i>
        </mt-cell>
        <mt-cell title="教育背景">
          <i class="iconfont icon-back-right" @click="$router.push('/center/candidate/resume/education')"></i>
        </mt-cell>
        <mt-cell title="工作背景">
          <i class="iconfont icon-back-right" @click="$router.push('/center/candidate/resume/experience')"></i>
        </mt-cell>
        <mt-cell title="技能技术">
          <i class="iconfont icon-back-right" @click="$router.push('/center/candidate/resume/certificate')"></i>
        </mt-cell>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
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
    }
  }
</style>
