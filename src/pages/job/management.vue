<template>
  <div class="page">
    <tf-header title="职位管理">
    </tf-header >
    <tf-wrapper :hasBackground = 'false'>
      <div class="page__content gap-4">
        <mt-cell-swipe :right="swipeRight" class="mint-cell-border-bottom">
          <div slot="title" class="custom-cell__title job__card">
            <div class="job__card__left">
              <div class="job__card__left__title">
                <div class="fz-30">SUBJECT</div>
              </div>
              <div class="cl-gray-dark fz-24 gap-4">全职</div>
              <div class="job__card__left__footer cl-gray fz-22 gap-4">
                <span><i class="iconfont icon-yulan"></i>100</span>
                <span><i class="iconfont icon-jianli"></i>100</span>
              </div>
            </div>
            <div class="job__card__right fz-22 cl-gray">
              <div>更新日期 2017-07-02</div>
              <div class="gap-2">过期日期 2018-07-02</div>
            </div>
          </div>
        </mt-cell-swipe>
        <mt-cell-swipe :right="swipeRight">
          <div slot="title" class="custom-cell__title job__card">
            <div class="job__card__left">
              <div class="job__card__left__title">
                <div class="fz-30">SUBJECT</div>
              </div>
              <div class="cl-gray-dark fz-24 gap-4">全职</div>
              <div class="job__card__left__footer cl-gray fz-22 gap-4">
                <span><i class="iconfont icon-yulan"></i>100</span>
                <span><i class="iconfont icon-jianli"></i>100</span>
              </div>
            </div>
            <div class="job__card__right fz-22 cl-gray">
              <div>更新日期 2017-07-02</div>
              <div class="gap-2">过期日期 2018-07-02</div>
            </div>
          </div>
        </mt-cell-swipe>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import { CellSwipe } from 'mint-ui'

  export default {
    componets: {
      CellSwipe
    },
    data () {
      return {
        swipeRight: [{
          content: '修改',
          style: { background: '#7DA027' }
        }, {
          content: '暂停',
          style: { background: '#C0C0C0' }
        }, {
          content: '删除',
          style: { background: '#FF3B3B' }
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    &__content {
       .job__card {
         display: flex;
         &__left {
           flex: 1;
         }
         &__right {
           margin-top: tr(70px);
           text-align: right;
           flex: 1;
         }
       }
     }
  }
</style>
