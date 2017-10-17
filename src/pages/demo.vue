<template>
  <div>
    <tf-button @click.native="showPopup = true" >提交</tf-button>
    <br>
    <mt-cell-swipe :right="swipeRight">
      <div slot="title" class="custom-cell__title">
        <p>小明</p>
        <small>TOFEL教师</small>
      </div>
    </mt-cell-swipe>
    
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
  import { CellSwipe } from 'mint-ui'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Popup,
      CellSwipe
    },
    data () {
      return {
        showPopup: false,
        swipeText: '测试测试测试测试测试测试测试测试',
        swipeRight: [{
          content: '已录用',
          style: { background: '#7DA027' },
          handler: () => this.one()
        }, {
          content: '不合适',
          style: { background: '#C0C0C0' },
          handler: () => this.two()
        }, {
          content: '面试邀请',
          style: { background: '#F1CA14' },
          handler: () => this.thr()
        }, {
          content: '删除',
          style: { background: '#FF3B3B' },
          handler: () => this.four()
        }, {
          content: '发offer',
          style: { background: '#FF8E3B' },
          handler: () => this.five()
        }]
      }
    },
    methods: {
      one () {
        alert('已录用')
      },
      two () {
        alert('不合适')
      },
      thr () {
        alert('面试邀请')
      },
      four () {
        alert('删除')
      },
      five () {
        alert('发offer')
      }
    }
  }
</script>
