<template>
  <div class="page">
    <tf-deputy-topbar title="我的简历">
      <div slot="topbar__right" class="fz-30" @click="$router.push('/center/candidate/resume/preview')">预览</div>
    </tf-deputy-topbar>
    <div class="page__content join-mint-cell">
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
  </div>
</template>

<script>
  import deputyTopbar from '@/components/deputy-topbar.vue'

  export default {
    components: {
      'tf-deputy-topbar': deputyTopbar
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
    }
  }
</style>
