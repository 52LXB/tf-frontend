<template>
  <div class="page">
    <tf-wrapper>
      <div class="fx-center">
        <div class="box">
        </div>
      </div>
    </tf-wrapper>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";

  .page {
    .box {
      width: tr(100px);
      height: tr(100px);
      background: $cl-red-light;
      box-shadow: 0 tr(10px) tr(10px) tr(3px) $cl-gray;
    }
  }
</style>
