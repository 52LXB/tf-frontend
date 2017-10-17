<template>
  <input 
    class="tf-input fz-30 cl-black"
    :class="{
      'with-border': !noBorder,
      'with-background': !noBackground
    }"
    :type="type"
    :value="value" 
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"/>
</template>

<script>
  export default {
    name: 'tfInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: [String, Number],
        default: ''
      },
      noBorder: {
        type: Boolean,
        default: false
      },
      noBackground: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .tf-input {
    box-sizing: border-box;
    width: 100%;
    height: tr(86px);
    padding: tr(20px);
    &.with-background{
      background: $cl-white;
    }
    &.with-border{
      border: 1px solid $cl-sliver;
      border-radius: tr(2px);
    }
  }
</style>
