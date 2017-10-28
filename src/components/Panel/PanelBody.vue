<template>
  <div :class="['ibox-content',{'no-padding':noPadding},{'ibox-heading':heading}]">
    <div class="scroll_content" v-if="scroll">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>
<script>
  export default {
    props: {
      noPadding: {
        type: Boolean,
        default: false
      },
      heading: {
        type: Boolean,
        default: false
      },
      //固定高度滚动panel
      scroll: {
        type: [Number, String]
      }
    },
    mounted() {
      if(this.scroll){
        $('.scroll_content').slimscroll({
          height: typeof this.scroll === 'string' ? this.scroll : this.scroll + 'px'
        })
      }
    }
  }
</script>