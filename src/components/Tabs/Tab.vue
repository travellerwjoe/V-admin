<template>
    <div :class="['tab-pane',{'active':isActive}]">
        <div class="panel-body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>

<script>
    export default {
        data() {
            return {
                isActive: this.active
            }
        },
        props: {
            label: String,
            icon: String,
            active: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
