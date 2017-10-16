<template>
  <div class="page">
    <tf-deputy-topbar title="基础消息"></tf-deputy-topbar>
    <div class="page__content join-mint-cell">
      <mt-field label="姓名" placeholder="请输入您的姓名" v-model="name"></mt-field>
      <mt-cell title="性别">
        <div class="mt-cell-radio cl-black">
          <i class="iconfont icon-yuanhuan"></i>男
          <i class="iconfont icon-xuanzeqiyuanhuan"></i>女
        </div>
      </mt-cell>
      <mt-cell title="生日">
        <div class="mint-cell-value-text">{{candidateForm.birthday}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="国籍">
        <div class="mint-cell-value-text">{{candidateForm.nationality.nationality_name}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="学历">
        <div class="mint-cell-value-text">{{candidateForm.education.education_name}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-field class="need" label="手机" placeholder="请输入您的手机号" type="tel" v-model="candidateForm.phone"></mt-field>
      <mt-field label="邮箱" placeholder="请输入您的邮箱" type="email" v-model="candidateForm.email"></mt-field>
      <mt-cell title="婚姻状态">
        <div class="mt-cell-radio cl-black">
          <i class="iconfont icon-yuanhuan"></i>已婚
          <i class="iconfont icon-xuanzeqiyuanhuan"></i>未婚
        </div>
      </mt-cell>
      <mt-cell title="所在城市">
        <div class="mint-cell-value-text">{{candidateForm.address}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="地址">
        <div class="mint-cell-value-text">{{candidateForm.address}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="facebook">
        <div class="mint-cell-value-text">{{candidateForm.faceBook}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="skpye">
        <div class="mint-cell-value-text">{{candidateForm.skpye}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="健康检查">
        <div class="mint-cell-value-text">{{candidateForm.health_check}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="是否犯罪证明">
        <div class="mint-cell-value-text">{{candidateForm.criminal_check}}</div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <mt-cell title="工作许可证">
        <div class="mint-cell-value-text"></div>
        <i class="iconfont icon-back-right" @click="$router.push('/join/candidate/certificate')"></i>
      </mt-cell>
      <button class="page__content__button btn btn--lg" @click="$router.push('/join/check-email')">立即注册</button>
    </div>
  </div>
</template>

<script>
  import deputyTopbar from '@/components/deputy-topbar.vue'

  export default {
    components: {
      'tf-deputy-topbar': deputyTopbar
    },
    computed: {
      name () {
        return this.candidateForm.first_name + ' ' + this.candidateForm.last_name
      }
    },
    data () {
      return {
        candidateForm: {
          'resume_id': 3,
          'first_name': 'first_name',
          'last_name': 'last_name',
          'gender': {
            'gender_id': 1,
            'gender_name': '女'
          },
          'birthday': 123,
          'nationality': {
            'nationality_id': 1,
            'nationality_name': '美国'
          },
          'education': {
            'education_id': 1,
            'education_name': '硕士'
          },
          'phone': '123',
          'email': 'email1111111@12.com',
          'address': '杭州',
          'faceBook': null,
          'health_check': null,
          'criminal_check': null,
          'work_permit': 1,
          'is_married': {
            'is_married_id': 96,
            'is_married_name': '未婚'
          },
          'Skype': null,
          'job_type': [
            {
              'job_type_id': 31,
              'job_type_name': 'Manager'
            },
            {
              'job_type_id': 32,
              'job_type_name': 'ESL'
            }
          ],
          'location': {
            'location_id': 122,
            'location_name': '杭州'
          },
          'salary': {
            'salary_id': 112,
            'salary_name': '20-25k'
          },
          'job_property': {
            'job_property_id': 116,
            'job_property_name': 'Part time'
          },
          'availability': {
            'availability_id': 122,
            'availability_name': '一个月'
          },
          'job_status': {
            'job_status_id': 125,
            'job_status_name': 'Demission'
          },
          'education_background': '浙江大学计算机硕士浙江大学计算机硕士浙江大学计算机硕士浙江大学计算机硕士',
          'experience_background': '阿里巴巴工作3年',
          'certificate_background': '教育资格职业证书',
          'experience': {
            'experience_id': 136,
            'experience_name': '4'
          },
          'headImg': '',
          'age': 18
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
      padding: tr(15px) tr(30px) tr(80px);
      &__button {
        width: 100%;
        margin-top: tr(80px);
      }
    }
  }
</style>
