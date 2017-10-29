<template>
    <div :class="['alert', `alert-${color}`, {'alert-dismissable': close}]">
        <button aria-hidden="true" data-dismiss="alert" class="close" type="button" v-if="close">×</button>
        <slot></slot>
    </div>
</template>

<style lang="scss">
    
</style>

<script>
    import {
        inArray
    } from "@/utils/helpers"
    export default {
        props: {
            color: {
                type: String,
                validator(value) {
                    return inArray(value, [
                        "default",
                        "success",
                        "info",
                        "danger",
                        "warning",
                        "link",
                        "primary",
                        "white"
                    ])
                },
                default: "default"
            },
            close: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
