<template>
  <textarea
    class="tf-textarea fz-30 cl-black"
    :class="{
      'with-border': !noBorder,
      'with-background': !noBackground
    }"
    :value="value" 
    :rows="rows"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)">
  </textarea>
</template>

<script>
  export default {
    name: 'tfTextarea',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: [String, Number],
        default: ''
      },
      rows: {
        type: Number,
        default: 5
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
  .tf-textarea {
    box-sizing: border-box;
    width: 100%;
    padding: tr(18px);
    &.with-background{
      background: $cl-white;
    }
    &.with-border{
      border: 1px solid $cl-sliver;
      border-radius: tr(2px);
    }
  }
</style>
