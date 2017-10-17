<template>
  <div class="page">
    <tf-topbar>
    </tf-topbar>
    <tf-wrapper>
      <div class="page__banner">
        <mt-swipe :auto="4000" class="page__mt-swipe">
          <mt-swipe-item><img src="../assets/img/banner/index_banner.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/job_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/teacher_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/vip_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/FTP_banner.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="page__content">
        <div class="page__content__top flexbox fz-24">
          <div class="page__content__top__item">
            <div class="fz-48 cl-primary">100</div>
            <div>服务过的客户</div>
          </div>
          <div class="page__content__top__item">
            <div class="fz-48 cl-primary">100</div>
            <div>已接收培训的老师</div>
          </div>
          <div class="page__content__top__item">
            <div class="fz-48 cl-primary">100</div>
            <div>已安排到岗的老师</div>
          </div>
        </div>
        <div class="page__content__card">
          <div class="page__content__card__img">
            <img src="../assets/img/index/index_institution.jpg"/>
          </div>
          <div class="fx-column-align-center icon--top">
            <div class="page__content__card__icon fx-center">
              <div class="icon__inner icon__inner--cl-primary fx-center">
                <i class="iconfont icon-yuanjiaojuxing fz-36 cl-primary"></i>
              </div>
            </div>
            <div class="page__content__card__icon-text fz-30">教育机构</div>
          </div>
          <div class="page__content__card__button fx-space-around">
              <tf-button type="primary-plain" size="xsm">教师招聘</tf-button>
              <tf-button type="primary-plain" size="xsm">PTF解决方案</tf-button>
              <tf-button type="primary-plain" size="xsm">会员介绍</tf-button>
            </div>
        </div>
        <div class="page__content__card">
          <div class="page__content__card__img">
            <img src="../assets/img/index/index_candidate.jpg"/>
          </div>
          <div class="fx-column-align-center icon--top">
            <div class="page__content__card__icon fx-center">
              <div class="icon__inner icon__inner--cl-red fx-center">
                <i class="iconfont icon-yuanjiaojuxing fz-36 cl-red-light"></i>
              </div>
            </div>
            <div class="page__content__card__icon-text fz-30">求职者</div>
          </div>
          <div class="page__content__card__button fx-space-around">
            <tf-button type="red-plain" size="xsm">我要求职</tf-button>
            <tf-button type="red-plain" size="xsm">教师培训</tf-button>
          </div>
        </div>
        <div class="page__content__card">
          <div class="page__content__card__img">
            <img src="../assets/img/index/1_1index_08.jpg"/>
          </div>
          <div class="fx-column-align-center icon--top">
            <div class="page__content__card__icon fx-center">
              <div class="icon__inner icon__inner--cl-yellow fx-center">
                <i class="iconfont icon-yuanjiaojuxing fz-36 cl-yellow"></i>
              </div>
            </div>
            <div class="page__content__card__icon-text fz-30">更多</div>
          </div>
          <div class="page__content__card__button fx-space-around">
            <tf-button type="yellow-plain" size="xsm">教育资源</tf-button>
            <tf-button type="yellow-plain" size="xsm">近期活动</tf-button>
            <tf-button type="yellow-plain" size="xsm">教育之行</tf-button>
          </div>
        </div>
      </div>
      <div class="page__banner">
        <mt-swipe :auto="4000" class="page__mt-swipe">
          <mt-swipe-item><img src="../assets/img/banner/index_banner.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/job_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/teacher_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/vip_banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/img/banner/FTP_banner.jpg"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="page__video fx-center">
        <video></video>
      </div>
      <div class="page__comment fx-justify-center">
        <img src="http://fakeimg.pl/750x720/000033/"/>
      </div>
      <div class="page__footer fx-align-center">
        <p class="fx-center fz-26 flex1">关于我们</p>
        <p class="fx-center fz-26 flex1">联系我们</p>
      </div>
    </tf-wrapper>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    width: 10rem;
    min-height: 100vh;
    background: $cl-white;
    &__banner {
      width: 10rem;
      height: tr(375px);
      img {
        width: 10rem;
      }
    }
    &__content {
      padding: 0 tr(40px) tr(20px);
      &__top {
        padding: tr(80px) 0;
        &__item {
          color: $cl-gray-dark;
          flex: 1;
          text-align: center;
          :last-child {
            margin-top: tr(20px);
          }
        }
      }
      &__card {
        padding-bottom: tr(60px);
        margin-bottom: tr(40px);
        box-shadow: 0 tr(10px) tr(10px) tr(3px) $cl-sliver-light;
        &__img {
          img {
            width: tr(670px);
            height: tr(305px);
          }
        }
        &__icon {
          width: tr(118px);
          height: tr(118px);
          background: $cl-white;
          border-radius: 100%;
          .icon__inner {
            width: tr(104px);
            height: tr(104px);
            border-radius: 100%;
            &--cl-primary {
              border: tr(1px) solid $cl-primary;
            }
            &--cl-red {
              border: tr(1px) solid $cl-red-light;
            }
            &--cl-yellow {
              border: tr(1px) solid $cl-yellow;
            }
          }
        }
        .icon--top {
          margin-top: tr(-59px);
        }
        &__icon-text {
          margin: tr(24px) 0 tr(37px);
          color: $cl-black;
        }
      }
    }
    &__video {
      height: tr(510px);
      video {
        width: tr(690px);
        height: tr(390px);
        background: $cl-white-dark;
      }
    }
    &__comment {
      img {
        width: 10rem;
        height: tr(720px);
      }
    }
    &__footer {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: $layer-index-45;
      color: $cl-white;
      height: tr(86px);
      background: rgba(51, 51, 51, 0.8);
      p {
        line-height: tr(34px);
        height: tr(34px);
      }
     :first-child {
       border-right: tr(1px) solid rgba(204, 204, 204, 0.4);
     }
    }
  }
</style>
