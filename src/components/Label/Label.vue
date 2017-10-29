<template>
    <span :class="['label',`label-${color}`]">
        <slot></slot>
    </span>
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
            }
        }
    }
</script>
