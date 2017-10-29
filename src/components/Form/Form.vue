<template>
    <form :class="['form',{'form-horizontal':horizontal}]" role="form" lpformnum="1">
        <slot></slot>
    </form>
</template>

<style lang="scss">
    
</style>

<script>
    export default {
        props: {
            horizontal: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
