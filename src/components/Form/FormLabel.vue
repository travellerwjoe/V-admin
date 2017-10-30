<template>
    <label class="control-label">
        <slot></slot>
    </label>
</template>
<style lang="scss">
.form-horizontal label{
    display: block;
}
</style>
<script>
    export default {
        mounted () {
            console.log(this)
        }
    }
</script>
