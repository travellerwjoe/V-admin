<template>
  <Wrapper>
    <component :is="component"></component>
  </Wrapper>
</template>
<style lang="scss" scoped>

</style>
<script>
import Wrapper from "@c/Wrapper"
import {DashboardV1} from '@v/Dashboards'
export default {
    data(){
        return {
            component:DashboardV1
        }
    },
    components: {
        Wrapper,
        DashboardV1
    }
}
</script>
