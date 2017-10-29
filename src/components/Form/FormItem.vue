<template>
    <div class="form-group">
        <label class="control-label">{{label}}</label>
        <slot></slot>
    </div>
</template>

<style lang="scss">
    
</style>

<script>
    export default {
        props: {
            label: String
        }
    }
</script>
