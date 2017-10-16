<template>
  <div class="page fx-column">
    <tf-deputy-topbar title="来源"></tf-deputy-topbar>
    <div class="page__content">
      <div class="page__content__button flexbox">
        <button class=" btn btn--md" v-for="sourceItem in sourceForm">{{sourceItem}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import deputyTopbar from '@/components/deputy-topbar.vue'

  export default {
    components: {
      'tf-deputy-topbar': deputyTopbar
    },
    data () {
      return {
        sourceForm: [
          '来源一',
          '来源二',
          '来源三',
          '来源四',
          '来源五'
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
    background: $cl-white;
    &__content {
      flex: 1;
      padding: tr(60px) tr(30px) tr(80px);
      &__button {
        flex-wrap: wrap;
        button {
          width: tr(200px);
          margin-right: tr(30px);
          margin-bottom: tr(30px);
        }
      }
    }
  }
</style>
