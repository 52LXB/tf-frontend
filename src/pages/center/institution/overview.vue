<template>
  <div class="page">
    <tf-header title="机构中心"></tf-header>
    <tf-wrapper :hasBackground="false">
      <div class="page__content">
        <div class="card">
          <div class="card__title">
            <i class="iconfont icon-zhiwei fz-36"></i>
            <span class="card__title__text fz-30">职位</span>
          </div>
          <div class="card__content flexbox fz-24">
            <div>在线职位<span>6</span></div>
            <div>审核中<span>6</span></div>
            <div>未通过<span>6</span></div>
            <div>过期<span>6</span></div>
            <div>暂停<span>6</span></div>
          </div>
        </div>
        <div class="card">
          <div class="card__title">
            <i class="iconfont icon-mianshi fz-36"></i>
            <span class="card__title__text fz-30">面试</span>
          </div>
          <div class="card__content flexbox fz-24">
            <div>邀请已发送<span>6</span></div>
            <div>被接受<span>6</span></div>
            <div>被拒绝<span>6</span></div>
            <div>已面试<span>6</span></div>
          </div>
        </div>
        <div class="card">
          <div class="card__title">
            <i class="iconfont icon-jianli fz-36"></i>
            <span class="card__title__text fz-30">简历</span>
          </div>
          <div class="card__content flexbox fz-24">
            <div>收到申请<span>6</span></div>
            <div>人工推荐<span>6</span></div>
            <div>待查看<span>6</span></div>
          </div>
        </div>
        <div class="card">
          <div class="card__title">
            <i class="iconfont icon-offer fz-36"></i>
            <span class="card__title__text fz-30">OFFER</span>
          </div>
          <div class="card__content flexbox fz-24">
            <div>审核中<span>6</span></div>
            <div>未通过<span>6</span></div>
            <div>已发出<span>6</span></div>
            <div>已录用<span>6</span></div>
          </div>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    &__content {
      margin-top: tr(40px);
      background: $cl-white;
      border-top: tr(1px) solid $cl-sliver-light;
      .card {
        padding: tr(30px) tr(40px);
        border-bottom: tr(1px) solid $cl-sliver-light;
        &__title {
          display: flex;
          align-items: center;
          i {
            color: $cl-primary;
          }
          &__text {
            margin-left: tr(10px);
            color: $cl-gray-dark;
          }
        }
        &__content {
          margin-top: tr(25px);
          color: $cl-gray;
          span {
            margin-left: tr(10px);
            margin-right: tr(40px);
            color: $cl-primary;
          }
        }
      }
    }
  }
</style>
