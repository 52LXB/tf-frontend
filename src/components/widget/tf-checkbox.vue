<template>
	<div class="tf-checkbox">
		<div class="fx-align-center">
	      <span class="tf-checkbox__icon" :class="{
	        'checked': checked === true,
	        'unchecked': checked === false
	      }"></span>
	      <span v-if="label !== ''" class="cl-gray-dark fz-30">{{ label }}</span>  
	      <div class="tf-checkbox__content">
	      	<slot name="content"></slot>
	      </div>
	    </div>
	</div>
</template>

<script>
  export default {
    name: 'tfCheckbox',
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
  .tf-checkbox {
    display: inline-block;
    .tf-checkbox__icon{
    	display: inline-block;
    	width: tr(30px);
    	height: tr(30px);
    	margin-right: tr(20px);
    	&.checked {
	    	background: url('~@/assets/img/icon-checkbox-checked.png') no-repeat center center;
	    	background-size: 100% 100%;
	    }
	    &.unchecked {
	    	background: url('~@/assets/img/icon-checkbox-unchecked.png') no-repeat center center;
	    	background-size: 100% 100%;
	    }
    }
    .tf-checkbox__content {
    	display: inline-block;
    }
  }
</style>