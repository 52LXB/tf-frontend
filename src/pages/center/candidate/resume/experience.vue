<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="工作背景">
      <div slot="topbar__right" class="fz-30">保存</div>
    </tf-deputy-topbar>
    <div class="page__content">
      <mt-field placeholder="请输入您的工作背景" type="textarea" rows="8"></mt-field>
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
    &__content {
      flex: 1;
      padding: tr(60px) 0 tr(80px);
      background: $cl-white-dark;
    }
  }
</style>
