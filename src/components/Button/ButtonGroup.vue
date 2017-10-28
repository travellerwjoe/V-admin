<template>
    <section class="btn-group" :data-toggle="multiple? 'buttons-checkbox':null">
        <slot></slot>
    </section>
</template>
<style lang="scss">

</style>
<script>
export default {
    props:{
        multiple:{
            type:Boolean,
            default:false
        }
    },
    computed: {
        
    }
}
</script>
