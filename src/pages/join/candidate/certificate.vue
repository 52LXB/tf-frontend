<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="教育培训证书">
      <div slot="topbar__right" class="fz-30">保存</div>
    </tf-deputy-topbar>
    <div class="page__content">
      <mt-field placeholder="请输入您的教育培训证书" type="textarea" rows="8"></mt-field>
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
          flex: 1;
          padding: tr(60px) 0 tr(80px);
          background: $cl-white-dark;
        }
    }
</style>
