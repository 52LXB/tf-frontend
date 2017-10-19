<template>
  <div class="page">
    <tf-header title="职位咨询"></tf-header>
    <tf-wrapper>
      <div class="page__content">
        <div class="top flexbox cl-white">
          <div class="top__logo">
            <img src="http://fakeimg.pl/200x200/"/>
          </div>
          <div class="top__content">
            <div>
              <span class="fz-36">新东方</span>
              <span class="top__content__welfare top__content__welfare--yellow fz-18">住宿补贴</span>
              <span class="top__content__welfare top__content__welfare--red fz-18">五险一金</span>
            </div>
            <div class="fz-36 gap-2">8K－10K</div>
            <div class="fz-24 gap-1">
              <span>公立</span>
              <span>&nbsp;200-500人</span>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="main__title fz-30 cl-black">如果您对此职位有任何疑问，欢迎咨询</div>
          <tf-textarea rows="10" placeholder="限500字之内"></tf-textarea>
        </div>
        <div class="footer">
          <tf-button type="primary" size="lg">
            <span class="fz-36">保&nbsp;&nbsp;&nbsp;&nbsp;存</span>
          </tf-button>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    &__content {
      .top {
        padding: tr(70px) tr(30px) tr(50px);
        background-image: url('../../assets/img/common/personal_center_background.jpg');
        background-size: 100%;
        &__logo {
          width: tr(120px);
          height: tr(120px);
          img {
            width: 100%;
          }
        }
        &__content {
          margin-left: tr(30px);
          &__welfare {
            padding: tr(2px) tr(10px);
            border-radius: tr(4px);
            &--yellow {
              background: $cl-yellow;
            }
            &--red {
              background: $cl-red-light;
            }
          }
        }
      }
      .main {
        padding: tr(10px) tr(30px);
        &__title {
          height: tr(100px);
          line-height: tr(100px);
        }
      }
      .footer {
        margin-top: tr(150px);
        padding: 0 tr(30px);
      }
    }
  }
</style>
