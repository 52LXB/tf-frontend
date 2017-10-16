<template>
  <div class="page fx-column fz-30">
    <tf-topbar></tf-topbar>
    <div class="page__content">
      <div class="top">
        <div class="fx-justify-center">
          <div class="top__avatar fx-center">
            <img src="http://fakeimg.pl/130x130/"/>
          </div>
        </div>
        <div class="top__name fx-center fz-36 cl-white-dark">
          机构名字
        </div>
        <div class=" top__text fx-justify-center fz-24">
          <span class="top__text__type">{{institutionForm.type}}</span>
          <span>{{institutionForm.scale}}人</span>
        </div>
        <div class="fx-center">
          <div class="top__button">
            查看职位
          </div>
        </div>
      </div>
      <div class="main">
        <div class="main__title main__title--border">关于我们</div>
        <div class="main__content">
          <div class="main__content__text">{{institutionForm.institutionForm}}</div>
        </div>
        <div class="main__title main__title--border">公司详情</div>
        <div class="main__content">
          <div class="main__content__text">公司网站: {{institutionForm.website}}</div>
          <div class="main__content__text">机构类型: {{institutionForm.type}}</div>
          <div class="main__content__text">机构规模: {{institutionForm.scale}}人</div>
          <div class="main__content__text">创立年份: {{institutionForm.created_year}}年</div>
          <div class="main__content__text">机构地址: {{institutionForm.address}}</div>
        </div>
        <div class="main__title">公司图片</div>
        <div class="main__imgs">
          <img class="main__imgs__item" v-for="img in institutionForm.img" :src="img"/>
        </div>
      </div>
    </div>
    <div class="page__cover">
      <div class="page__cover__swipe">
        <mt-swipe :auto="1000">
          <mt-swipe-item><img src="http://fakeimg.pl/158x158/"/></mt-swipe-item>
          <mt-swipe-item><img src="http://fakeimg.pl/158x158/"/></mt-swipe-item>
          <mt-swipe-item><img src="http://fakeimg.pl/158x158/"/></mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script>
  import Topbar from '@/components/topbar.vue'

  export default {
    components: {
      'tf-topbar': Topbar
    },
    data () {
      return {
        institutionForm: {
          'user_id': '57',
          'name': '机构名称',
          'type': '公立',
          'scale': '100-200',
          'city': '60',
          'address': '杭州市滨江区恒鑫大厦',
          'contact': 'cc',
          'phone': '1110',
          'telphone': null,
          'email': '2383894793@qq.com',
          'institutionForm': '新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村，是规模最大的综合性教育集团，同时也是教育培训集团。新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村。',
          'website': 'www.xingdongfang.com',
          'recruit_permit': null,
          'num_recruited': null,
          'check_status': '2',
          'check_description': '',
          'source_knowus': '3',
          'source_knowus_other': null,
          'select_reason': '2',
          'titile': 'http://fakeimg.pl/130x130/',
          'img': [
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/',
            'http://fakeimg.pl/158x158/'
          ],
          'created_year': '2001'
        }
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
      .top {
        width: 100%;
        height: tr(475px);
        background-image: url('../../../assets/img/common/personal_center_background.jpg');
        background-size: 100% 100%;
        color: $cl-white-dark;
        position: relative;
        &__avatar {
          width: tr(130px);
          height: tr(130px);
          padding: tr(60px) 0 tr(30px) 0;
          img {
            width: tr(130px);
            height: tr(130px);
            background: $cl-gray;
            overflow: hidden;
          }
        }
        &__text {
          margin-top: tr(20px);
          &__type {
            margin-right: tr(10px);
          }
        }
        &__button {
          margin-top: tr(40px);
          padding: tr(15px) tr(50px);
          border: tr(1px) solid rgba(255, 255, 255, 0.3);
        }
      }
      .main {
        padding: 0 tr(30px) tr(60px);
        &__title {
          height: tr(95px);
          line-height: tr(95px);
          color: $cl-black;
          &--border {
            border-bottom: tr(1px) solid $cl-sliver-light;
          }
        }
        &__content {
          padding-top: tr(40px);
          overflow: hidden;
          &__text {
            color: $cl-gray;
            line-height: tr(54px);
          }
        }
        &__imgs {
          box-sizing: content-box;
          width: 100%;
          height: tr(158px);
          padding-top: tr(10px);
          white-space: nowrap;
          overflow-y: hidden;
          overflow-x: scroll;
          &__item {
            width: tr(158px);
            height: tr(158px);
            margin-right: tr(20px);
          }
        }
        &__imgs::-webkit-scrollbar {
          display: none;
        }
      }
    }
    &__cover {
      width: 10rem;
      height: 100vh;
      background: $cl-black-dark;
      &__swipe {
        height: tr(500px);
      }
    }
  }
</style>
