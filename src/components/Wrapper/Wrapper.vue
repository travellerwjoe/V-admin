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
        data() {
            return {
                menus: [{
                        name: 'Dashboards',
                        icon: 'fa-th-large',
                        active: true,
                        children: [{
                                name: 'Dashboard v1',
                                link: '/Dashboards/DashboardV1',
                                active: true
                            },
                            {
                                name: 'Dashboard v2',
                                link: '/Dashboards/DashboardV2'
                            },
                            {
                                name: 'Dashboard v3',
                                link: '/Dashboards/DashboardV3'
                            },
                            {
                                name: 'Dashboard v4',
                                link: '/Dashboards/DashboardV4'
                            },
                            {
                                name: 'Dashboard v5',
                                link: '/Dashboards/DashboardV5'
                            }
                        ]
                    },
                    {
                        name: 'UI Elements',
                        icon: 'fa-flask',
                        children: [{
                                name: 'Typography',
                                link: '/UI/Typography'
                            },
                            {
                                name: 'Icons',
                                link: '/UI/Icons'
                            },
                            {
                                name: 'Draggable Panels',
                                link: '/UI/DraggablePanels'
                            },
                            {
                                name: 'Resiaeable Panels',
                                link: '/UI/ResiaeablePanels'
                            },
                            {
                                name: 'Buttons',
                                link: '/UI/Buttons'
                            },
                            {
                                name: 'Video',
                                link: '/UI/Video'
                            },
                            {
                                name: 'Panels',
                                link: '/UI/Panels'
                            },
                            {
                                name: 'Tabs',
                                link: '/UI/Tabs'
                            },
                            {
                                name: 'Alerts & Tooltips',
                                link: '/UI/AlertsTooltips'
                            },
                            {
                                name: 'Helper css classes',
                                link: '/UI/HelperCssClasses'
                            },
                            {
                                name: 'Badge & Labels & Progress',
                                link: '/UI/BadgesLabelsProgressBars'
                            }
                        ]
                    },
                    {
                        name: 'Forms',
                        icon: 'fa-edit',
                        children: [{
                            name: 'Basic Form',
                            link: '/Forms/BasicForm',
                        }, {
                            name: 'Advanced Plugin',
                            link: '/Forms/AdvancedPlugin'
                        }, {
                            name: 'Wizard',
                            link: '/Forms/Wizard'
                        }, {
                            name: 'File Upload',
                            link: '/Forms/FileUpload'
                        }, {
                            name: 'Text Editor',
                            link: '/Forms/TextEditor'
                        }, {
                            name: 'Autocomplete',
                            link: '/Forms/Autocomplete'
                        }, {
                            name: 'Markdown',
                            link: '/Forms/Markdown'
                        }]
                    },
                    {
                        name: 'Tables',
                        icon: 'fa-table',
                        children: [{
                            name: 'Static Tables',
                            link: '/Tables/StaticTables',
                            active: true,
                        }, {
                            name: 'Data Tables',
                            link: '/Tables/DataTables',
                        }, {
                            name: 'Foo Tables',
                            link: '/Tables/FooTables'
                        }, {
                            name: 'jQuery Grid',
                            link: '/Tables/JQueryGrid'
                        }]
                    },
                    {
                        name:'Grids',
                        icon:'fa-laptop',
                        link:'/Layouts/Grids'
                    }
                ]
            }
        },
        methods: {
            changeView(view) {
                this.$router.push(view)
            }
        },
        components: {
            Navigation,
            NavBar,
            Footer,
            Content
        }
    }
</script>

