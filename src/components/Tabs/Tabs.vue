<template>
    <div :class="classes">
        <template v-if="position !== 'bottom'">
            <ul class="nav nav-tabs">
                <li :class="{'active':child.isActive}" v-for="(child,index) in children" :key="index" @click="(e)=>onChange(e,child.isActive,index)">
                    <a>
                        <i :class="['fa',child.icon]" v-if="child.icon"></i> {{child.label}}
                    </a>
                </li>
            </ul>
            <div class="tab-content">
                <slot></slot>
            </div>
        </template>

        <template v-else>
            <div class="tab-content">
                <slot></slot>
            </div>
            <ul class="nav nav-tabs">
                <li :class="{'active':child.isActive}" v-for="(child,index) in children" :key="index" @click="(e)=>onChange(e,child.isActive,index)">
                    <a>
                        <i :class="['fa',child.icon]" v-if="child.icon"></i> {{child.label}}
                    </a>
                </li>
            </ul>
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
            position: {
                type: String,
                validator(value) {
                    return inArray(value, ['left', 'right', 'top', 'bottom'])
                },
                default: 'top'
    
            }
        },
        data() {
            return {
                children: []
            }
        },
        computed: {
            classes() {
                return ['tabs-container', `tabs-${this.position}`]
            }
        },
        methods: {
            onChange(e, active, index) {
                if (active) return
                this.$emit("change", e)
                this.children.forEach((child, i) => {
                    if (i === index) {
                        child.isActive = true
                    } else {
                        child.isActive = false
                    }
                })
            },
            //若子Tab没有设置active，设置默认第一个active
            setDefaultActive() {
                if (this.children.every(child => !child.isActive)) {
                    this.children[0].isActive = true
                }
            }
        },
        mounted() {
            this.children = this.$children
            this.setDefaultActive()
        }
    };
</script>
