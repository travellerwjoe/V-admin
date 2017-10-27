<template>
  <!-- Wrapper-->
<div id="wrapper">
    <!-- Navigation -->
    <!--<div ng-include="'views/common/navigation.html'"></div>-->
    <Navigation :menus="menus" @change="changeView"></Navigation>

    <!-- Page wraper -->
    <!-- ng-class with current state name give you the ability to extended customization your view -->
    <!--<div id="page-wrapper" class="gray-bg {{$state.current.name}}">-->
    <div id="page-wrapper" class="gray-bg">

        <!-- Page wrapper -->
        <NavBar></NavBar>

        <!-- Main view  -->
        <!--<Content></Content>-->
        <router-view></router-view>

        <!-- Footer -->
        <Footer></Footer>

    </div>
    <!-- End page wrapper-->

    <!-- Right Sidebar -->
    <div ng-include="'views/common/right_sidebar.html'"></div>

</div>
<!-- End wrapper-->  
</template>
<style lang="scss">

</style>
<script>
import Navigation from "@c/Navigation"
import NavBar from '@c/NavBar'
import Footer from '@c/Footer'
import Content from '@c/Content'
export default {
    data(){
        return {
            menus:[
                {
                    name:'Dashboards',
                    children:[
                        {
                            name:'Dashboard v1',
                            link:'DashboardV1'
                        },
                        {
                            name:'Dashboard v2',
                            link:'DashboardV2'
                        },
                        {
                            name:'Dashboard v3',
                            link:'DashboardV3'
                        },
                        {
                            name:'Dashboard v4',
                            link:'DashboardV4'
                        },
                        {
                            name:'Dashboard v5',
                            link:'DashboardV5'
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        changeView(view){
            console.log(view)
        }
    },
    components:{
        Navigation,
        NavBar,
        Footer,
        Content
    }
}
</script>

