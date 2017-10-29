<template>
    <input :type="type" :placeholder="placeholder" class="form-control">
</template>

<style lang="scss">
    
</style>

<script>
    import {
        inArray
    } from "@/utils/helpers"
    export default {
        props: {
            type: {
                type: String,
                validator(value) {
                    return inArray(value, [
                        "text",
                        "email",
                        "password",
                        "search",
                        "hidden"
                    ])
                },
                default: "text"
            },
            placeholder: String
        }
    }
</script>
