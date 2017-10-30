<template>
    <div :class="classes">
    </div>
</template>
<style lang="scss">

</style>
<script>
    import {
        inArray
    } from '@/utils/helpers'
    export default {
        props: {
            dashed: {
                type: Boolean,
                deafult: false
            },
            solid: {
                type: Boolean,
                deafult: false
            }
        },
        computed: {
            classes(){
                for(const key in this.$props){
                    if(this[key]) return `hr-line-${key}`
                }
                return `hr-line-solid`
            }
        }
    }
</script>
