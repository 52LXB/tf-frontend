<template>
  <div>
    <mt-cell-swipe :right="swipeRight">
      <div slot="title" class="custom-cell__title">
        <p>swiper demo</p>
        <small>左滑试试吧</small>
      </div>
    </mt-cell-swipe>
    <br>
    <tf-button @click.native="showPopup = true">显示popup</tf-button>
    <tf-button @click.native="showDialog = true">显示dialog</tf-button>
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
      :no-border="true">
    </tf-textarea>

    <tf-radio 
      v-for="(item, index) in radioList"
      :checked="radioIsChecked(item.value)"
      :key="index"
      :label="item.name"
      @click.native="toggleRadio(item.value)"></tf-radio>

    <tf-checkbox
      v-for="(item, index) in checkboxList"
      :checked="checkboxIsChecked(item.value)"
      :key="index"
      :label="item.name"
      @click.native="toggleCheckobox(item.value)"></tf-checkbox>

    <tf-step :list="stepList" :current-index="0"></tf-step>
    <tf-step :list="stepList" :current-index="1"></tf-step>
    <tf-step :list="stepList" :current-index="2"></tf-step>

    <div v-transfer-dom>
      <popup v-model="showPopup" position="left" width="100%">
        <div class="popup-demo">
          <tf-button type="primary" @click.native="showPopup = false">关闭popup</tf-button>
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showDialog">
        <tf-dialog-body
          type="success"
          title="发送成功"
          @on-close="showDialog = false">
          <div slot="content">
            哇哦<br>消息发送成功咯
          </div>
        </tf-dialog-body>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import { TransferDom, Popup, XDialog } from 'vux'
  import { CellSwipe } from 'mint-ui'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Popup,
      CellSwipe,
      XDialog
    },
    data () {
      return {
        inputVal: '',
        showDialog: false,
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
        }],
        checkedRadioVal: 1,
        radioList: [{
          value: 1,
          name: '男'
        }, {
          value: 2,
          name: '女'
        }],

        checkedCheckboxVals: [],
        checkboxList: [{
          value: 1,
          name: '苹果'
        }, {
          value: 2,
          name: '香蕉'
        }, {
          value: 3,
          name: '小番茄'
        }],

        stepList: ['步骤一', '步骤三', '步骤三', '步骤四']
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
      },
      toggleRadio (radioVal) {
        if (radioVal === this.checkedRadioVal) {
          return
        } else {
          this.checkedRadioVal = radioVal
        }
      },
      radioIsChecked (radioVal) {
        if (radioVal === this.checkedRadioVal) {
          return true
        } else {
          return false
        }
      },

      toggleCheckobox (checkboxVal) {
        const checkboxValIndex = this.checkedCheckboxVals.indexOf(checkboxVal)

        if (checkboxValIndex > -1) {
          this.checkedCheckboxVals.splice(checkboxValIndex, 1)
        } else {
          this.checkedCheckboxVals.push(checkboxVal)
        }
      },
      checkboxIsChecked (checkboxVal) {
        const checkboxValIndex = this.checkedCheckboxVals.indexOf(checkboxVal)

        if (checkboxValIndex > -1) {
          return true
        } else {
          return false
        }
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
