<template>
  <div class="page">
    <tf-header title="我的简历">
      <span slot="tf-header__right" class="fz-30" @click="$router.push('/center/candidate/resume/preview')">预览</span>
    </tf-header>
    <tf-wrapper>
      <div class="page__content">
        <group @click.native="$router.push('/center/candidate/resume/basic')">
          <cell is-link class="fz-30">
            <span slot="title">
              基础消息
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="$router.push('/center/candidate/resume/objective')">
          <cell is-link class="fz-30">
            <span slot="title" >
              Objective
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="showPopupEducation = true">
          <cell is-link class="fz-30">
            <span slot="title" >
              教育背景
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="showPopupExperiencen = true">
          <cell is-link class="fz-30">
            <span slot="title">
              工作背景
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="showCertificate = true">
          <cell is-link>
            <span slot="title" class="fz-30">
              技能技术
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <!--教育背景-->
        <div v-transfer-dom>
          <popup v-model="showPopupEducation" position="right" width="100%">
            <tf-text-page customEventLeft="true" v-on:on-left-click="showPopupEducation = false" title="学校简介">
              <span slot="tf-header__right" class="fz-30">保存</span>
            </tf-text-page>
          </popup>
        </div>
        <!--工作背景-->
        <div v-transfer-dom>
          <popup v-model="showPopupExperiencen" position="right" width="100%">
            <tf-text-page customEventLeft="true" v-on:on-left-click="showPopupExperiencen = false" title="工作背景">
              <span slot="tf-header__right" class="fz-30">保存</span>
            </tf-text-page>
          </popup>
        </div>
        <!--技术证书-->
        <div v-transfer-dom>
          <popup v-model="showCertificate" position="right" width="100%">
            <tf-text-page customEventLeft="true" v-on:on-left-click="showCertificate = false" title="技术证书">
              <span slot="tf-header__right" class="fz-30">保存</span>
            </tf-text-page>
          </popup>
        </div>
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
        showPopupEducation: false,
        showPopupExperiencen: false,
        showCertificate: false
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
    }
  }
</style>
