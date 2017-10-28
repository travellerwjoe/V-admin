<template>
    <div :class="classes">
        <div class="panel-heading" v-if="$slots.head || $slots.title">
            <slot name="head"></slot>
            <h5 class="panel-title" v-if="$slots.title">
                <slot name="title"></slot>
            </h5>
        </div>
        <div class="panel-collaspse collapse" v-if="collapsed">
            <div class="panel-body" v-if="$slots.body">
                <slot name="body"></slot>
            </div>
            <div class="panel-footer" v-if="$slots.foot">
                <slot name="foot"></slot>
            </div>
        </div>
        <template v-else>
            <div class="panel-body" v-if="$slots.body">
                <slot name="body"></slot>
            </div>
            <div class="panel-footer" v-if="$slots.foot">
                <slot name="foot"></slot>
            </div>
        </template>
    </div>
</template>
<style lang="scss">

</style>
<script>
    import {
        inArray
    } from '@/utils/helpers'
    export default {
        props: {
            color: {
                type: String,
                validator(value) {
                    return inArray(value, ['default', 'success', 'info', 'danger', 'warning', 'link', 'primary', 'white'])
                },
                default: 'default'
            },
            collapsed: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes() {
                return ['panel', `${this.color?'panel-'+this.color:''}`]
            }
        },
    }
</script>
