<template>
    <button :type="type" :class="classes" :data-toggle="single?'button':null">
                <i :class="iconClasses" v-if="icon"></i>
                <slot></slot>
            </button>
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
            size: {
                type: String,
                validator(value) {
                    return inArray(value, ['lg', 'sm', 'xs'])
                }
            },
            //固定宽度 120px
            wm: {
                type: Boolean,
                default: false
            },
            //轮廓按钮
            outline: {
                type: Boolean,
                default: false
            },
            //100%按钮
            block: {
                type: Boolean,
                default: false
            },
            //3D阴影按钮
            '3D': {
                type: Boolean,
                default: false
            },
            //3D阴影大按钮
            '3DLarge': {
                type: Boolean,
                default: false
            },
            //按下激活状态
            active: {
                type: Boolean,
                default: false
            },
            icon: String,
            //作为toggle按钮单选
            single: {
                type: Boolean,
                default: false
            },
            circle: {
                type: Boolean,
                default: false
            },
            rounded: {
                type: Boolean,
                default: false
            },
            submit: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes() {
                return [
                    'btn',
                    `${this.color?'btn-'+this.color:''}`,
                    `${this.size?'btn-'+this.size:''}`,
                    {
                        'btn-w-m': this.wm,
                        'btn-outline': this.outline,
                        'btn-block': this.block,
                        'dim': this['3D'] || this['3DLarge'],
                        'btn-large-dim': this['3DLarge'],
                        'btn-circle': this.circle,
                        'btn-rounded': this.rounded,
                        'active': this.active
                    }
                ]
            },
            iconClasses() {
                return ['fa', this.icon]
            },
            type() {
                return this.submit ? 'submit' : 'button'
            }
        }
    }
</script>
