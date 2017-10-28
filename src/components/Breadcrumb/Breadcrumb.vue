<template>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
            <h2>
                {{items[items.length-1]}}
            </h2>
            <ol class="breadcrumb">
                <li :class="{'active':index === item.length-1}" v-for="(item,index) in items" :key="index">
                    <template v-if="index !== items.length-1">
                        <template v-if="item.split('|')[1]">
                            <router-link :to="item | seperate(1)">
                                {{item | seperate(0)}}
                            </router-link>
                        </template>
                        <a v-else>{{item | seperate(0)}}</a>
                    </template>
                    <template v-else>
                        <strong>{{item | seperate(0)}}</strong>
                    </template>
                </li>
            </ol>
        </div>
        <div class="col-lg-2">

        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
export default {
    props:{
        items:{
            type:Array
        }
    },
    filters: {
        seperate(str,index){
            return str.split('|')[index]
        }
    }
}
</script>

