<template>
  <div class="page fz-30">
    <tf-topbar>
    </tf-topbar>
    <tf-wrapper>
      <div class="page__content">
        <div class="top">
          <div class="fx-center">
            <div class="top__avatar">
              <img src="http://fakeimg.pl/130x130/"/>
              <i class="iconfont icon-xiugai fz-48 cl-red-light" @click="$router.push('/center/candidate/resume')"></i>
            </div>
          </div>
          <div class="top__name fx-center fz-36 cl-white-dark">
            求职者名字
          </div>
          <div class="top__menu fx-space-around">
            <div class="top__menu__item" @click="$router.push('/center/candidate/resume')">
              <i class="iconfont icon-jianli fz-62"></i>
              <div>我的简历</div>
            </div>
            <div class="top__menu__item">
              <i class="iconfont icon-zhiwei fz-62"></i>
              <div>求职管理</div>
            </div>
            <div class="top__menu__item">
              <i class="iconfont icon-zuji fz-62"></i>
              <div>收藏足迹</div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="list__item">
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
  import { Cell, Group, PopupPicker, Popup, TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      PopupPicker,
      Popup
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
        background: url('../../../assets/img/common/personal_center_background.jpg');
        background-size: 100% 100%;
        color: $cl-white-dark;
        &__avatar {
          position: relative;
          width: tr(130px);
          height: tr(130px);
          padding: tr(60px) 0 tr(40px) 0;
          border-radius: 100%;
          img {
            width: tr(130px);
            height: tr(130px);
            background: $cl-gray;
            overflow: hidden;
            border-radius: 100%;
          }
          i {
            position: absolute;
            bottom: tr(20px);
            right: 0;
          }
        }
        &__menu {
          margin-top: tr(40px);
          &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            border-right: tr(1px) rgba(229, 229, 229, 0.2) solid;
            i {
              margin-bottom: tr(20px);
            }
          }
          &__item:last-child {
            border: none;
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
