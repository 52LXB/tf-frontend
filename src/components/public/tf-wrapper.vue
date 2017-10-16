<template>
  <div class="tf-wrapper"
       :class="{ 'tf-wrapper-bg':  hasBackground }"
       :style="{ 'padding-top': paddingTop/75 + 'rem' }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tfWrapper',
    props: {
      paddingTop: {
        type: Number,
        default: 100
      },
      hasBackground: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .tf-wrapper {
    position: relative;
    box-sizing: border-box;
    max-width: 10rem;
    min-height: 100vh;
    margin: auto;
    overflow: hidden;
  }
  .tf-wrapper-bg{
    background: $cl-white;
  }
</style>
