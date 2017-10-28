<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<style lang="scss">

</style>
<script>
    export default {
        props: {
            collapsed: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        computed: {
            classes() {
                return ['ibox', 'float-e-margins', {
                    'collapsed': this.collapsed
                }]
            }
        },
        methods: {}
    }
</script>