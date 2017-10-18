<template>
	<div class="tf-radio">
		<div class="fx-align-center">
      <span class="tf-radio__icon" :class="{
        'checked': checked === true,
        'unchecked': checked === false
      }"></span>
      <span v-if="label !== ''" class="cl-gray-dark fz-30">{{ label }}</span>  
    </div>
	</div>
</template>

<script>
  export default {
    name: 'tfRadio',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .tf-radio {
    display: inline-block;
    .tf-radio__icon{
    	display: inline-block;
    	width: tr(30px);
    	height: tr(30px);
    	margin-right: tr(20px);
    	&.checked {
	    	background: url('~@/assets/img/icon-radio-checked.png') no-repeat center center;
	    	background-size: 100% 100%;
	    }
	    &.unchecked {
	    	background: url('~@/assets/img/icon-radio-unchecked.png') no-repeat center center;
	    	background-size: 100% 100%;
	    }
    }
  }
</style>