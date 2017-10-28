<template>
    <div class="tabs-container">
        <ul class="nav nav-tabs">
            <li :class="{'active':child.active}" v-for="(child,index) in [...$children]" :key="index">
                <a data-toggle="tab" href="#tab-1">{{child.label}}</a>
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
export default {
    computed:{
        labels(){
            return this.$children.map(child=>child.label)
        }
    },
    mounted(){
        console.log(this.$children)
        console.log(this.labels)
    }
}
</script>
