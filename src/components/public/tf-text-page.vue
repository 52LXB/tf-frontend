<template>
  <div class="tf-text-page">
    <div class="tf-header  fx-align-center cl-black">
    <span class="tf-header__back" @click="handleClickLeft">
      <i class="iconfont icon-fanhui"></i>
    </span>
      <div class="tf-header__title fz-36 fx-justify-center">{{title}}</div>
      <div class="tf-header__right">
        <slot name="tf-header__right"></slot>
      </div>
    </div>
    <tf-wrapper :hasBackground= false>
      <tf-textarea class="gap-8"
                    v-model="inputVal"
                    :placeholder="placeholder"
                    rows="10"
                   :no-border="true"></tf-textarea>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
    name: 'tfTextPage',
    props: {
      title: {
        type: String,
        default: '标题'
      },
      customEventLeft: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      }
    },
    methods: {
      handleClickLeft () {
        if (this.customEventLeft) {
          this.$emit('on-left-click')
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 10rem;
    height: tr(100px);
    border-bottom: $cl-sliver solid tr(1px);
    box-sizing: border-box;
    background: $cl-white;
    z-index: $layer-index-40;
    &__back {
      flex: 1;
      padding-left: tr(30px);
    }
    &__title {
      flex: 4;
    }
    &__right {
      text-align: right;
      flex: 1;
      padding-right: tr(30px);
    }
  }
</style>
