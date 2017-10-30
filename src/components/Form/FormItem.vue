<template>
    <div class="form-group">
        <label class="control-label" v-if="label">{{label}}</label>
        <slot class="control-label" name="label"></slot>
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
