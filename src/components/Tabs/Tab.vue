<template>
    <div class="tab-pane active">
        <div class="panel-body">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
    export default {
        props: {
            label: String,
            active: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
