<template>
    <li @click="onClick">
        <a href="javascript:;">
            <slot></slot>
        </a>
    </li>
</template>
<style lang="scss">

</style>
<script>
export default {
    methods: {
        onClick(e){
            this.$emit('onClick',e)
        }
    }
}
</script>
