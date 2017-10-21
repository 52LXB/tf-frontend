<template>
  <div class="page">
    <tf-header title="发布新职位">
      <span slot="tf-header__right" class="fz-30" @click="$router.push('/job/preview')">预览</span>
    </tf-header>
    <tf-wrapper>
      <div class="page__content">
        <!--职位名称 -->
        <group>
          <cell class="fz-30">
            <span slot="title">
              <span class="cl-red">*&nbsp;</span>职位名称
            </span>
            <span slot="default">
              <input type="text" placeholder="请输入职位名称 " v-model="jobForm.name"/>
            </span>
          </cell>
        </group>
        <!--职位类型-->
        <group @click.native="showJobType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>职位类型
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showJobType" :show-cell="false" :columns="1" :data="jobTypeList" v-model="jobTypeVal"></popup-picker>
              {{ jobTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--职位描述-->
        <group @click.native="showDescription = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>职位描述
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--所在城市-->
        <group>
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>所在城市
            </span>
            <span slot="default" >
            </span>
          </cell>
        </group>
        <!--招聘人数-->
        <group @click.native="showNumRecruitedType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>职位类型
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showNumRecruitedType" :show-cell="false" :columns="1" :data="numRecruitedTypeList" v-model="numRecruitedTypeVal"></popup-picker>
              {{ numRecruitedTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--薪水-->
        <group @click.native="showSalaryType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>薪水
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showSalaryType" :show-cell="false" :columns="1" :data="salaryTypeList" v-model="salaryTypeVal"></popup-picker>
              {{ salaryTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!-- 工作经验 -->
        <group @click.native="showExperienceType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>工作经验
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showExperienceType" :show-cell="false" :columns="1" :data="experienceTypeList" v-model="experienceTypeVal"></popup-picker>
              {{ experienceTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--学历 -->
        <group @click.native="showEducationType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>学历
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showEducationType" :show-cell="false" :columns="1" :data="educationTypeList" v-model="educationTypeVal"></popup-picker>
              {{ educationTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--入职时间 -->
        <group @click.native="showDueDateType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>入职时间
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showDueDateType" :show-cell="false" :columns="1" :data="dueDateTypeList" v-model="dueDateTypeVal"></popup-picker>
              {{ dueDateTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--性别 -->
        <group @click.native="showGenderType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>性别
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showGenderType" :show-cell="false" :columns="1" :data="genderTypeList" v-model="genderTypeVal"></popup-picker>
              {{ genderTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--年龄 -->
        <group @click.native="showAgeType = true">
          <cell is-link class="fz-30">
            <span slot="title">
              <span class="cl-red-light">*&nbsp;</span>年龄
            </span>
            <span slot="default" class="vux-cell--no-border">
              <popup-picker :show.sync="showAgeType" :show-cell="false" :columns="1" :data="ageTypeList" v-model="ageTypeVal"></popup-picker>
              {{ ageTypeSelectedName }}
            </span>
          </cell>
        </group>
        <!--福利 -->
        <div class="page__content__welfare fz-30 cl-gray-dark flexbox">
          <div class="page__content__welfare__title"><span class="cl-red-light">*&nbsp;</span>福利</div>
          <div class="page__content__welfare__list">
            <tf-checkbox class="welfare-checkbox"
              v-for="(item, index) in welfareCheckboxList"
              :checked="checkboxIsChecked(item.value)"
              :key="index"
              :label="item.name"
              @click.native="toggleCheckobox(item.value)">
            </tf-checkbox>
          </div>
        </div>
        <!--弹窗——职位描述 -->
        <div v-transfer-dom>
          <popup v-model="showDescription" position="right" width="100%">
            <tf-text-page customEventLeft="true" v-on:on-left-click="showDescription = false" title="职位描述">
              <span slot="tf-header__right" class="fz-30">保存</span>
            </tf-text-page>
          </popup>
        </div>
        <tf-button class="gap-16" type="primary" size="lg" @click.native="$router.push('/job/review')">发&nbsp;&nbsp;&nbsp;布</tf-button>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  import { Cell, Group, PopupPicker, Popup, TransferDom, Datetime } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      PopupPicker,
      Popup,
      Datetime
    },
    data () {
      return {
        showJobType: false,
        showDescription: false,
        showNumRecruitedType: false,
        showSalaryType: false,
        showExperienceType: false,
        showEducationType: false,
        showDueDateType: false,
        showGenderType: false,
        showAgeType: false,
        jobTypeVal: ['0'],
        numRecruitedTypeVal: ['1'],
        salaryTypeVal: ['0'],
        experienceTypeVal: ['0'],
        educationTypeVal: ['0'],
        dueDateTypeVal: ['0'],
        genderTypeVal: ['0'],
        ageTypeVal: ['0'],
        welfareCheckboxVals: [],
        jobTypeList: [
          {
            value: '0',
            name: '类型一'
          },
          {
            value: '1',
            name: '类型二'
          },
          {
            value: '2',
            name: '类型三'
          }
        ],
        numRecruitedTypeList: [
          {
            value: '0',
            name: '类型一'
          },
          {
            value: '1',
            name: '类型二'
          },
          {
            value: '2',
            name: '类型三'
          }
        ],
        salaryTypeList: [
          {
            value: '0',
            name: '类型一'
          },
          {
            value: '1',
            name: '类型二'
          },
          {
            value: '2',
            name: '类型三'
          }
        ],
        experienceTypeList: [
          {
            value: '0',
            name: '一年'
          },
          {
            value: '1',
            name: '类型二'
          },
          {
            value: '2',
            name: '类型三'
          }
        ],
        educationTypeList: [
          {
            value: '0',
            name: '本科'
          },
          {
            value: '1',
            name: '类型二'
          },
          {
            value: '2',
            name: '类型三'
          }
        ],
        dueDateTypeList: [
          {
            value: '0',
            name: '一个月以内'
          },
          {
            value: '1',
            name: '类型二'
          },
          {
            value: '2',
            name: '类型三'
          }
        ],
        genderTypeList: [
          {
            value: '0',
            name: '男'
          },
          {
            value: '1',
            name: '女'
          },
          {
            value: '2',
            name: '不限'
          }
        ],
        ageTypeList: [
          {
            value: '0',
            name: '20-30岁'
          },
          {
            value: '1',
            name: '30-40岁'
          },
          {
            value: '2',
            name: '40以上'
          }
        ],
        welfareCheckboxList: [
          {
            value: '0',
            name: '住宿'
          },
          {
            value: '1',
            name: '履行合同奖金'
          },
          {
            value: '2',
            name: '机票补贴'
          },
          {
            value: '3',
            name: '保险'
          },
          {
            value: '4',
            name: '工作餐'
          }
        ],
        jobForm: {
          'name': '',
          'job_id': 89,
          'city': {
            'city_id': 123,
            'city_name': '营口市'
          },
          'job_type': {
            'job_type_id': 129,
            'job_type_name': '全职'
          },
          'salary': {
            'salary_id': 44,
            'salary_name': '15-20k'
          },
          'education': {
            'education_id': 57,
            'education_name': '学士'
          },
          'age': 68,
          'gender': {
            'gender_id': 75,
            'gender_name': '不限'
          },
          'type': {
            'type_id': 27,
            'type_name': 'ESL'
          },
          'due_date': 1513987200,
          'institution_name': '英孚教育',
          'num_recruited': {
            'num_recruited_id': 1,
            'num_recruited_name': '100-200人'
          },
          'experience': {
            'experience_id': 52,
            'experience_name': '3年'
          },
          'created_at': '10:00:00',
          'logo': 'http://fakeimg.pl/400x400/000033/',
          'institution_type': {
            'institution_type_id': 10,
            'institution_type_name': '私立'
          },
          'description': '新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村，是规模最大的综合性教育集团，同时也是教育培训集团。新东方，全名北京新东方教育科技（集团）有限公司总部位于北京市海淀区中关村。'
        }
      }
    },
    computed: {
      jobTypeSelectedName () {
        return this.jobTypeList.find(elem => {
          return elem.value === this.jobTypeVal[0]
        }).name
      },
      numRecruitedTypeSelectedName () {
        return this.numRecruitedTypeList.find(elem => {
          return elem.value === this.numRecruitedTypeVal[0]
        }).name
      },
      salaryTypeSelectedName () {
        return this.salaryTypeList.find(elem => {
          return elem.value === this.salaryTypeVal[0]
        }).name
      },
      experienceTypeSelectedName () {
        return this.experienceTypeList.find(elem => {
          return elem.value === this.experienceTypeVal[0]
        }).name
      },
      educationTypeSelectedName () {
        return this.educationTypeList.find(elem => {
          return elem.value === this.educationTypeVal[0]
        }).name
      },
      dueDateTypeSelectedName () {
        return this.dueDateTypeList.find(elem => {
          return elem.value === this.dueDateTypeVal[0]
        }).name
      },
      genderTypeSelectedName () {
        return this.genderTypeList.find(elem => {
          return elem.value === this.genderTypeVal[0]
        }).name
      },
      ageTypeSelectedName () {
        return this.ageTypeList.find(elem => {
          return elem.value === this.ageTypeVal[0]
        }).name
      }
    },
    methods: {
      toggleCheckobox (checkboxVal) {
        const checkboxValIndex = this.welfareCheckboxVals.indexOf(checkboxVal)

        if (checkboxValIndex > -1) {
          this.welfareCheckboxVals.splice(checkboxValIndex, 1)
        } else {
          this.welfareCheckboxVals.push(checkboxVal)
        }
      },
      checkboxIsChecked (checkboxVal) {
        const checkboxValIndex = this.welfareCheckboxVals.indexOf(checkboxVal)

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
    &__content {
      padding: tr(15px) tr(30px) tr(80px);
      &__welfare {
        padding: tr(15px) 0;
        &__title {
          width: tr(200px);
        }
      }
    }
    .welfare-checkbox {
      margin-bottom: tr(30px);
    }
  }
</style>
