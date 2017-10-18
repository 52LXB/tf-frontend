<template>
  <div class="page">
    <tf-header title="我的简历">
      <span slot="tf-header__right" class="fz-30" @click="$router.push('/center/candidate/resume/preview')">预览</span>
    </tf-header>
    <tf-wrapper>
      <div class="page__content">
        <group @click.native="$router.push('/center/candidate/resume/basic')">
          <cell is-link>
            <span slot="title" class="fz-30">
              基础消息
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="$router.push('/center/candidate/resume/objective')">
          <cell is-link>
            <span slot="title" class="fz-30">
              Objective
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="$router.push('/center/candidate/resume/education')">
          <cell is-link>
            <span slot="title" class="fz-30">
              教育背景
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="$router.push('/center/candidate/resume/experience')">
          <cell is-link>
            <span slot="title" class="fz-30">
              工作背景
            </span>
            <span slot="default"></span>
          </cell>
        </group>

        <group @click.native="$router.push('/center/candidate/resume/certificate')">
          <cell is-link>
            <span slot="title" class="fz-30">
              技能技术
            </span>
            <span slot="default"></span>
          </cell>
        </group>
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
