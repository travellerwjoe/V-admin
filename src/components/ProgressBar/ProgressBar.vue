<template>
    <div :class="['progress',{'progress-striped': this.striped,'active':active}]">
        <template v-if="dataArr.length">
            <div v-for="(item,index) in dataArr" :key="index" :class="['progress-bar', `progress-bar-${item.color}`]" :style="getStyles(item)" aria-valuemax="100" aria-valuemin="0" :aria-valuenow="item.percent" role="progressbar">
                <span class="sr-only">{{item.label}}</span>
            </div>
        </template>
        <div v-else :class="['progress-bar', `progress-bar-${color}`]" :style="getStyles()" aria-valuemax="100" aria-valuemin="0" :aria-valuenow="percent" role="progressbar">
            <span class="sr-only">{{label}}</span>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>

<script>
    import {
        inArray
    } from "@/utils/helpers"
    export default {
        data() {
            return {}
        },
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
            percent: {
                type: [Number, String],
                validator(value) {
                    value = parseInt(value)
                    return value >= 0 && value <= 100
                },
                default: 0
            },
            label: String,
            reverse: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            },
            data: [Array, Object]
        },
        methods:{
            getStyles(item){
                item = item || this
                const reverseStyle = item.reverse ? {
                    'float': 'right'
                } : {}
                return [{
                    'width': item.percent + '%'
                }, reverseStyle]
            }
        },
        computed: {
            dataArr() {
                return Array.isArray(this.data) ? this.data : typeof this.data === 'object' ? [this.data] : []
            }
        }
    }
</script>
