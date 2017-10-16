<template>
  <div>
    <tf-button @click.native="showPopup = true" >提交</tf-button>
    <div v-transfer-dom>
      <popup v-model="showPopup" position="left" width="100%">
        <div class="popup-demo">
          123123123123123
        </div>
      </popup>
    </div>
    <tf-wrapper>
      <div class="page__content fx-column flex1">
        <div class="page__content__top fx-space-around">
          <div class="fx-column-align-center">
            <i class="iconfont icon-huiyuan cl-green fz-72"></i>
            <span>会员</span>
          </div>
          <div class="fx-column-align-center">
            <i class="iconfont icon-zixun cl-green fz-72"></i>
            <span>咨询</span>
          </div>
          <div class="fx-column-align-center">
            <i class="iconfont icon-dingyue cl-green fz-72"></i>
            <span>订阅</span>
          </div>
        </div>
        <div class="page__content__menu fx-center">关于我们</div>
        <div class="page__content__menu fx-center">联系我们</div>
        <div class="page__content__menu fx-center">服务条款</div>
        <div class="page__content__menu fx-center">帮助</div>
        <div class="page__content__footer fx-align-end flex1">
          <div class="fx-space-around">
            <i class="iconfont icon-facebook"></i>
            <i class="iconfont icon-juxing"></i>
            <i class="iconfont icon-insgram"></i>
            <i class="iconfont icon-LinkedIn"></i>
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-weibo"></i>
          </div>
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import { TransferDom, Popup } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Popup
    },
    data () {
      return {
        showPopup: false
      }
    },
    methods: {}
  }
</script>
