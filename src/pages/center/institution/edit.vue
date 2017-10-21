<template>
  <div>
    <tf-header title="机构信息">
      <span slot="tf-header__right" class="fz-30" @click="$router.push('/center/institution/preview')">预览</span>
    </tf-header>
    <tf-wrapper>
      <div class="institution-content">
        <!--机构LOGO-->
        <group>
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>机构LOGO
            </span>
            <span slot="default">
              <div class="institution-content__logo">
                <img src="http://placehold.it/100x100"/>
              </div>
            </span>
          </cell>
        </group>
        <!--机构名称-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>机构名称
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入机构名称"/>
            </span>
          </cell>
        </group>
        <!--学校类型-->
        <group @click.native="showPickerSchoolType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>学校类型
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showPickerSchoolType" :show-cell="false" :columns="1" :data="schoolTypeList" v-model="schoolTypeSelectedVal"></popup-picker>
              {{ schoolTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--学校规模-->
        <group @click.native="showSchoolScaleType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>学校规模
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showSchoolScaleType" :show-cell="false" :columns="1" :data="schoolScaleTypeList" v-model="schoolScaleTypedVal"></popup-picker>
              {{schoolScaleTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--所在城市-->
        <group>
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>所在城市
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <!--地址-->
        <group @click.native="showAddress = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>地址
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <!--联系人-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>联系人
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人姓名"/>
            </span>
          </cell>
        </group>
        <!--手机-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>手机
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人手机号"/>
            </span>
          </cell>
        </group>
        <!--邮箱-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>邮箱
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入邮箱号"/>
            </span>
          </cell>
        </group>
        <!--办公室座机-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>办公室座机
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入办公室座机"/>
            </span>
          </cell>
        </group>
        <!--学校网址-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>学校网址
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入学校网址"/>
            </span>
          </cell>
        </group>
        <!--学校简介-->
        <group @click.native="showSchoolIntro = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>学校简介
            </span>
            <span slot="default"></span>
          </cell>
        </group>
        <!--合法聘用外教-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>合法聘用外教
            </span>
            <span slot="default">
              <tf-radio
                v-for="(item, index) in radioList"
                :checked="radioIsChecked(item.value)"
                :key="index"
                :label="item.name"
                @click.native="toggleRadio(item.value)"></tf-radio>
            </span>
          </cell>
        </group>
        <!--目前外教数量-->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>目前外教数量
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入目前外教数量"/>
            </span>
          </cell>
        </group>
        <!--学校图片-->
        <div class="institution-content-pics__cell">
          <p class="fz-30 cl-gray-dark">
            <span class="cl-red">*&nbsp;</span>学校图片
          </p>
          <div class="pics-wrap fx-space-between">
            <div class="pics-item" v-for="(item, index) in [1, 1, 1]">
              <img src="http://placehold.it/100x100"/>
            </div>
            <div class="pics-upload">
              <img src="../../../assets/img/institution/add_picture.png"/>
            </div>
          </div>
        </div>
        <!--弹窗——学校简介 -->
        <div v-transfer-dom>
          <popup v-model="showSchoolIntro" position="right" width="100%">
            <div class="popup-school-intro">
              <tf-text-page customEventLeft="true" @on-left-click="showSchoolIntro = false" title="学校简介">
                <span slot="tf-header__right" class="fz-30">保存</span>
              </tf-text-page>
            </div>
          </popup>
        </div>
        <!--弹窗——地址 -->
        <div v-transfer-dom>
          <popup v-model="showAddress" position="right" width="100%">
            <tf-text-page customEventLeft="true" @on-left-click="showAddress = false" title="地址">
              <span slot="tf-header__right" class="fz-30">保存</span>
            </tf-text-page>
          </popup>
        </div>
        <tf-button type="primary" size="lg">保存</tf-button>
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
    },
    data () {
      return {
        showPickerSchoolType: false,
        showSchoolScaleType: false,
        showSchoolIntro: false,
        showAddress: false,
        schoolTypeSelectedVal: ['1'],
        schoolScaleTypedVal: ['1'],
        checkedRadioVal: 1,
        schoolTypeList: [
          {
            value: '1',
            name: '初中'
          },
          {
            value: '2',
            name: '高中'
          }
        ],
        schoolScaleTypeList: [
          {
            value: '1',
            name: '<100'
          },
          {
            value: '2',
            name: '100-200'
          }
        ],
        radioList: [
          {
            value: 1,
            name: '是'
          },
          {
            value: 2,
            name: '否'
          }
        ],

        institutionForm: {
          'user_id': '57',
          'name': '机构名称',
          'type': '公立',
          'scale': '100-200',
          'city': 'city',
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
    },
    computed: {
      schoolTypeSelectedName () {
        return this.schoolTypeList.find(elem => {
          return elem.value === this.schoolTypeSelectedVal[0]
        }).name
      },
      schoolScaleTypeSelectedName () {
        return this.schoolScaleTypeList.find(elem => {
          return elem.value === this.schoolScaleTypedVal[0]
        }).name
      }
    },
    methods: {
      radioIsChecked (radioVal) {
        if (radioVal === this.checkedRadioVal) {
          return true
        } else {
          return false
        }
      },
      toggleRadio (radioVal) {
        if (radioVal === this.checkedRadioVal) {
          return
        } else {
          this.checkedRadioVal = radioVal
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .institution-content{
    padding: 0 tr(30px) tr(98px);
    .institution-content__logo{
      width: tr(88px);
      height: tr(88px);
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .institution-content-pics__cell{
      padding: tr(30px) 0;
      .pics-wrap{
        padding: tr(30px) 0;
        .pics-item, .pics-upload{
          width: tr(158px);
          height: tr(158px);
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>
