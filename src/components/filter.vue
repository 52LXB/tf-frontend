<template>
  <div class="filter-page fx-column">
    <div class="filter-page__content">
      <div class="filter-page__list">
        <div class="filter-page__title">职位类型</div>
        <button>不限</button>
      </div>
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

  .filter-page {
    min-height: 100vh;
    background: $cl-white;
    &__content {
      flex: 1;
    }
  }
</style>
