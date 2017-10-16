<template>
  <div>
    <tf-header title="机构信息"></tf-header>
    <tf-wrapper>
      <div class="institution-content">
        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>机构LOGO
            </span>
            <span slot="default">
              <div class="institution-content__logo">
                <img src="http://placehold.it/100x100"/>
              </div>
            </span>
          </cell>
        </group>

        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>机构名称
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入机构名称"/>
            </span>
          </cell>
        </group>

        <group @click.native="showPickerSchoolType = true">
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学校类型
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showPickerSchoolType" :show-cell="false" :columns="1" :data="schoolTypeList" v-model="schoolTypeSelectedVal"></popup-picker>
              {{ schoolTypeSelectedName }}
            </span>
          </cell>
        </group>

        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学校规模
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>所在城市
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>地址
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>联系人
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人姓名"/>
            </span>
          </cell>
        </group>

        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>手机
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入联系人手机号"/>
            </span>
          </cell>
        </group>

        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>邮箱
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入邮箱号"/>
            </span>
          </cell>
        </group>

        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>办公室座机
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入办公室座机"/>
            </span>
          </cell>
        </group>

        <group>
          <cell>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学校网址
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入学校网址"/>
            </span>
          </cell>
        </group>

        <group @click.native="showPopupSchoolIntro = true">
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>学校简介
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>合法聘用外教
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group>
          <cell is-link>
            <span slot="title" class="fz-30">
              <span class="cl-red">*&nbsp;</span>目前外教数量
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入目前外教数量"/>
            </span>
          </cell>
        </group>

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

        <tf-button type="primary" size="lg">保存</tf-button>
      </div>
    </tf-wrapper>

    <!-- 学校简介 -->
    <div v-transfer-dom>
      <popup v-model="showPopupSchoolIntro" height="100%">
        <div class="popup-school-intro">
          <tf-header title="学校简介" :custom-event-left="true" @on-left-click="showPopupSchoolIntro = false"></tf-header>
        </div>
      </popup>
    </div>
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
        },
        showPickerSchoolType: false,
        schoolTypeSelectedVal: ['1'],
        schoolTypeList: [{
          value: '1',
          name: '初中'
        }, {
          value: '2',
          name: '高中'
        }, {
          value: '3',
          name: '大学'
        }],
        showPopupSchoolIntro: false
      }
    },
    computed: {
      schoolTypeSelectedName () {
        return this.schoolTypeList.find(elem => {
          return elem.value === this.schoolTypeSelectedVal[0]
        }).name
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
