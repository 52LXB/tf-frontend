<template>
  <div>
    <mt-cell-swipe :right="swipeRight">
      <div slot="title" class="custom-cell__title">
        <p>小明</p>
        <small>TOFEL教师</small>
      </div>
    </mt-cell-swipe>
    <br>
    <tf-button type="primary" @click.native="showPopup = true">显示popup</tf-button>
    <br>
    <tf-input 
      type="text"
      v-model="inputVal" 
      placeholder="input"></tf-input>
    <tf-textarea 
      v-model="inputVal" 
      placeholder="textarea"></tf-textarea>
    <tf-textarea 
      v-model="inputVal" 
      placeholder="无边框textarea" 
      :no-border="true"></tf-textarea>

    <div v-transfer-dom>
      <popup v-model="showPopup" position="left" width="100%">
        <div class="popup-demo">
          <tf-button type="primary" @click.native="showPopup = false">关闭popup</tf-button>
        </div>
      </popup>
    </div>
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
        inputVal: '',
        showPopup: false,
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

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    .box {
      width: tr(100px);
      height: tr(100px);
      background: $cl-red-light;
      box-shadow: 0 tr(10px) tr(10px) tr(3px) $cl-gray;
    }
  }
</style>
