<template>
    <div class="ibox-title">
        <slot></slot>
        <div class="ibox-tools" v-if="!noTools">
            <a class="collapse-link" @click="showhide" v-if="collapse">
                <i class="fa fa-chevron-up"></i>
            </a>
            <a class="dropdown-toggle" data-toggle="dropdown" v-if="option">
                <i class="fa fa-wrench"></i>
            </a>
            <ul class="dropdown-menu dropdown-user" v-if="option">
                <li>
                    <a href="#">Config option 1</a>
                </li>
                <li>
                    <a href="#">Config option 2</a>
                </li>
            </ul>
            <a class="fullscreen-link" v-if="fullscreen">
                <i class="fa fa-expand"></i>
            </a>
            <a class="close-link" @click="closebox" v-if="close">
                <i class="fa fa-times"></i>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            noTools: {
                type: Boolean,
                default: false
            },
            //关闭tools按钮
            close: {
                type: Boolean,
                default: true
            },
            //选项tools按钮
            option: {
                type: Boolean,
                default: true
            },
            //折叠tools按钮
            collapse: {
                type: Boolean,
                default: true
            },
            //全屏tools按钮
            fullscreen: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            showhide() {},
            closebox() {}
        }
    }
</script>