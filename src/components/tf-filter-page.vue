<template>
  <div class="page fz-30">
    <tf-header title="筛选"></tf-header>
    <tf-wrapper>
      <div class="filter" v-for="filterItem in filterForm">
        <div class="filter__name cl-black">{{filterItem.name}}</div>
        <div class="filter__item">
          <span class="filter__item__value" v-for="filterItemValue in filterItem.value">{{filterItemValue}}</span>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
    name: 'TfFilterPage',
    data () {
      return {
        filterForm: [
          {
            name: '职位类型',
            value: ['不限', '兼职兼职兼职', '全职']
          },
          {
            name: '地区',
            value: ['不限', '北京', '上海', '杭州']
          },
          {
            name: '性别',
            value: ['不限', '男', '女', '男', '女']
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    .filter {
      padding: 0 tr(30px);
      margin-top: tr(60px);
      &__name {
      }
      &__item {
        margin-top: tr(15px);
        &__value {
          display: inline-block;
          border: tr(1px) solid $cl-sliver-light;
          padding: tr(15px) tr(60px);
          margin: tr(20px) tr(40px) 0 0;
          color: $cl-gray-dark;
        }
      }
    }
  }
</style>
