<template>
  <div>
    <div>
      <tab :line-width=5 active-color='cl-primary' v-model="index" :custom-bar-width="getBarWidth" >
        <tab-item class="vux-center" :selected="demoSelected === item" v-for="(item, index) in tabList" @click="demoSelected = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in tabList" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>

    <br/>
  </div>
</template>



<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
  const list = () => ['默认', '最新', '全部']

  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        tabList: ['默认', '最新', '全部'],
        demoSelected: '默认',
        list3: ['收到的消息', '发出的消息'],
        demo3: '收到的消息',
        list4: ['正在放映', '即将上映'],
        demo4: '即将上映',
        demoDisabled: 'A',
        index: 0,
        getBarWidth: function (index) {
          return '1.5rem'
        }
      }
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .box {
    padding: 15px;
  }
  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }
  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }
  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
</style>
