<template>
	<div class="tf-step">
		<div class="tf-step__item fz-24"
      v-for="(item, index) in list"
      :class="{
        'tf-step__item__with__tail': index < list.length-1
      }">
        <div class="tf-step__item__wrap">
          <div class="tf-step__item__icon">
            <div class="tf-step__item__icon__inner fx-center cl-sliver-light" 
              :class="{
                'active': index <= currentIndex
              }">
              {{index+1}}
            </div>
          </div>

          <div class="tf-step__item__text cl-gray">
            {{item}}
          </div>
            
          <div v-if="index < list.length - 1" class="tf-step__item__tail"
            :class="{
              'active': index < currentIndex
            }">
            
          </div>
        </div>
    </div>
	</div>
</template>

<script>
  export default {
    name: 'tfStep',
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/out-import";
  .tf-step {
    display: -webkit-flex;
    display: flex;
    .tf-step__item {
      display: inline-block;
      &.tf-step__item__with__tail {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        overflow: hidden;
      }
      .tf-step__item__wrap {
        position: relative;
        .tf-step__item__icon {
          position: relative;
          margin-bottom: tr(14px);
          z-index: $layer-index-20;
          .tf-step__item__icon__inner {
            width: tr(64px);
            height: tr(64px);
            text-align: center;
            background: #C1C1C1;
            border-radius: 100%;
            color: $cl-gray;
            z-index: $layer-index-10;
            &.active {
              background: $cl-primary;
              color: $cl-white;
            }
          }
        }
        .tf-step__item__text {}
        .tf-step__item__tail {
          position: absolute;
          left: 0;
          top: tr(30px);
          width: 100%;
          height: tr(2px);
          background: #C1C1C1;
          z-index: $layer-index-10 - 1;
          &.active {
            background: $cl-primary;
          }
        }
      }
    }
  }
</style>