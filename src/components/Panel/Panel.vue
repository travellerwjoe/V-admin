<template>
    <div class="ibox">
        <div class="ibox-title">
            <slot name="title"></slot>
            <div class="ibox-tools" v-if="!noTools">
                <a class="collapse-link" :click="showhide">
                    <i class="fa fa-chevron-up"></i>
                </a>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-wrench"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li><a href="#">Config option 1</a>
                    </li>
                    <li><a href="#">Config option 2</a>
                    </li>
                </ul>
                <a class="close-link" :click="closebox">
                    <i class="fa fa-times"></i>
                </a>
            </div>
        </div>
        <div :class="['ibox-content','ibox-heading',{'no-padding':noPadding}]" v-if="$slots['content-heading']">
            <slot name="content-heading"></slot>
        </div>
        <div :class="['ibox-content',{'no-padding':noPadding}]">
            <slot  name="content"></slot>
        </div>
    </div>
</template>
<style lang="scss">
    
</style>
<script>
    export default{
        props:{
            noPadding:{
                type:Boolean,
                default:false
            },
            noTools:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {

            }
        },
        methods:{
            showhide(){
                
            },
            closebox(){
                
            }
        }
    }
</script>