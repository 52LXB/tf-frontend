<template>
  <div class="page fz-30">
    <tf-topbar></tf-topbar>
    <tf-wrapper>
      <div class="page__content">
        <div class="top">
          <div class="top__review" @click="$router.push('/center/institution/preview')">
            <i class="iconfont icon-gailan"></i>
            <span class="fz-24">预览</span>
          </div>
          <div class="fx-justify-center">
            <div class="top__avatar fx-center">
              <img src="http://fakeimg.pl/130x130/"/>
              <i class="iconfont icon-xiugai fz-48 cl-red-light" @click="$router.push('/center/institution/edit')"></i>
            </div>
          </div>
          <div class="fx-justify-center">
            <div class="top__name fx-center fz-36 cl-white-dark">
              机构名字
            </div>
          </div>
          <div class="fx-justify-center">
            <div class="top__status fz-14">
              待审核
            </div>
          </div>
          <div class="top__menu fx-space-around fz-26">
            <div class="top__menu__item  top__menu__item--border fx-column-align-center flex1"
                 @click="$router.push('/job/create')">
              <i class="iconfont icon-edit fz-62"></i>
              <div>发布职位</div>
            </div>
            <div class="top__menu__item  top__menu__item--border fx-column-align-center flex1"
                 @click="$router.push('/job/management')">
              <i class="iconfont icon-mingpian fz-62"></i>
              <div>职位管理</div>
            </div>
            <div class="top__menu__item top__menu__item--border fx-column-align-center flex1">
              <i class="iconfont icon-touxiang fz-62"></i>
              <div>求职者管理</div>
            </div>
            <div class="top__menu__item fx-column-align-center flex1">
              <i class="iconfont icon-zuji fz-62"></i>
              <div>收藏足迹</div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="list__item" @click="$router.push('/center/institution/overview')">
            <div class="fx-align-center">
              <i class="iconfont icon-gailan cl-green fz-62"></i>
              <span class="list__item__text">概览</span>
            </div>
            <i class="iconfont icon-back-right cl-sliver fz-36"></i>
          </div>
          <div class="list__item">
            <div class="fx-align-center">
              <i class="iconfont icon-wodexiaoxi cl-red-light fz-62"></i>
              <span class="list__item__text">我的消息</span>
              <i class="iconfont icon-iconfontyuandian cl-red"></i>
            </div>
            <i class="iconfont icon-back-right cl-sliver fz-36"></i>
          </div>
          <div class="list__item">
            <div class="fx-align-center">
              <i class="iconfont icon-wodezhanghu cl-yellow fz-62"></i>
              <span class="list__item__text">我的账户</span>
            </div>
            <i class="iconfont icon-back-right cl-sliver fz-36"></i>
          </div>
          <div class="list__item">
            <div class="fx-align-center">
              <i class="iconfont icon-yinsishezhi cl-bule fz-62"></i>
              <span class="list__item__text">隐私设置</span>
            </div>
            <i class="iconfont icon-back-right cl-sliver fz-36"></i>
          </div>
          <div class="list__item">
            <div class="fx-align-center">
              <i class="iconfont icon-wodedingyue cl-orange fz-62"></i>
              <span class="list__item__text">我的订阅</span>
            </div>
            <i class="iconfont icon-back-right cl-sliver fz-36"></i>
          </div>
          <div class="list__item">
            <div class="fx-align-center">
              <i class="iconfont icon-wodeshezhi cl-green-dark fz-62"></i>
              <span class="list__item__text">账号设置</span>
            </div>
            <i class="iconfont icon-back-right cl-sliver fz-36"></i>
          </div>
          <div class="list__item">
            <div class="fx-align-center">
              <i class="iconfont icon-xiugaimima cl-purple fz-62"></i>
              <span class="list__item__text">修改密码</span>
            </div>
            <i class="iconfont icon-back-right cl-sliver fz-36"></i>
          </div>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
    components: {
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
      .top {
        width: 100%;
        height: tr(475px);
        background-image: url('../../../assets/img/common/personal_center_background.jpg');
        background-size: 100% 100%;
        color: $cl-white-dark;
        position: relative;
        &__review {
          position: absolute;
          top: tr(10px);
          right: tr(10px);
        }
        &__avatar {
          position: relative;
          width: tr(130px);
          height: tr(130px);
          padding: tr(60px) 0 tr(30px) 0;
          img {
            width: tr(130px);
            height: tr(130px);
            background: $cl-gray;
            overflow: hidden;
          }
          i {
            position: absolute;
            bottom: tr(20px);
            right: tr(-20px);
          }
        }
        &__status {
          margin-top: tr(10px);
          padding: tr(5px);
          background: $cl-yellow;
          border-radius: tr(4px);
        }
        &__menu {
          margin-top: tr(10px);
          &__item {
            i {
              margin-bottom: tr(10px);
            }
            &--border {
              border-right: tr(1px) rgba(229, 229, 229, 0.2) solid;
            }
          }
        }
      }
      .list {
        padding: 0 tr(30px);
        &__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          height: tr(100px);
          border-bottom: tr(1px) solid $cl-sliver-light;
          &__text {
            color: $cl-gray;
            margin: 0 tr(10px) 0 tr(15px);
          }
        }
      }
    }
  }
</style>
