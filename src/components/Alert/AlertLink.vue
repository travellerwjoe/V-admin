<template>
    <a class="alert-link" @click="onClick">
        <slot></slot>
    </a>
</template>

<style lang="scss">
    
</style>

<script>
    export default {
        methods: {
            onClick(e) {
                this.$emit('click', e)
            }
        }
    }
</script>
