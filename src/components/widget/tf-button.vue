<template>
  <button
    class="tf-btn fx-center"
    :class="[size, type]"
    :disabled="disabled==true">
    <slot>按钮</slot>
  </button>
</template>

<script>
  export default {
    name: 'tfButton',
    props: {
      size: {
        type: String, // xsm(加小) sm(小） md（中） lg（大）
        default: 'sm'
      },
      type: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean, // true false
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  @mixin set-btn-style($border-color, $bg-color, $fz-color) {
    border: tr(1px) solid $border-color;
    background: $bg-color;
    color: $fz-color;
  }
  .tf-btn {
    box-sizing: border-box;
    text-align: center;
    display: inline-block;
    &.xsm {
      width: tr(177px);
      height: tr(56px);
      border-radius: tr(4px);
      font-size: 12px;
    }
    &.sm {
      width: tr(217px);
      height: tr(80px);
      border-radius: tr(4px);
      font-size: 15px;
    }
    &.md {
      width: tr(325px);
      height: tr(88px);
      border-radius: tr(2px);
      font-size: 18px;
    }
    &.lg {
      width: 100%;
      display: block;
      height: tr(90px);
      border-radius: tr(2px);
      font-size: 18px;
    }
    &.default {
      @include set-btn-style($cl-sliver-light, $cl-white, $cl-gray-dark);
      &:active {
        @include set-btn-style($cl-primary, $cl-white, $cl-primary);
      }
    }
    &.primary {
      @include set-btn-style($cl-primary, $cl-primary, $cl-white);
      &:active {
        @include set-btn-style(#7da014, #7da014, $cl-white);
      }
    }
    &.primary-plain {
      @include set-btn-style($cl-primary, $cl-white, $cl-primary);
      &:active {
        @include set-btn-style(#649823, $cl-white, #649823);
      }
    }
    &.red-plain {
      @include set-btn-style($cl-red-light, $cl-white, $cl-red-light);
      &:active {
        @include set-btn-style($cl-red-light, $cl-white, $cl-red-light);
      }
    }
    &.yellow-plain {
      @include set-btn-style($cl-yellow, $cl-white, $cl-yellow);
      &:active {
        @include set-btn-style($cl-yellow, $cl-white, $cl-yellow);
      }
    }

    &[disabled='disabled'] {
      @include set-btn-style($cl-gray, $cl-gray, $cl-white);
    }
  }
  [data-dpr="2"]{
    .tf-btn {
      &.xsm {
        font-size: 24px;
      }
      &.sm {
        font-size: 30px;
      }
      &.md {
        font-size: 36px;
      }
      &.lg {
        font-size: 36px;
      }
    }
  }
  [data-dpr="3"]{
    .tf-btn {
      &.xsm {
          font-size: 36px;
      }
      &.sm {
        font-size: 45px;
        }
      &.md {
        font-size: 54px;
        }
      &.lg {
        font-size: 54px;
        }
      }
    }
</style>
