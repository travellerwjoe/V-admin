import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@v/Home'
// import {DashboardV1,DashboardV2} from '@v/Dashboard'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect: '/Dashboards/DashboardV1',
            children: [
                {
                    path: 'Dashboards/DashboardV1',
                    name: 'DashboardV1',
                    component: () => import('@v/Dashboards/Dashboard.v1')
                },
                {
                    path: 'Dashboards/DashboardV2',
                    name: 'DashboardV2',
                    component: () => import('@v/Dashboards/Dashboard.v2')
                },
                {
                    path: 'UI/Typography',
                    name: 'Typography',
                    component: () => import('@v/UI/Typography')
                },
                {
                    path: 'UI/Icons',
                    name: 'Icons',
                    component: () => import('@v/UI/Icons')
                },
                {
                    path: 'UI/Buttons',
                    name: 'Buttons',
                    component: () => import('@v/UI/Buttons')
                },
                {
                    path: 'UI/Panels',
                    name: 'Panels',
                    component: () => import('@v/UI/Panels')
                },
                {
                    path: 'UI/Tabs',
                    name: 'Tabs',
                    component: () => import('@v/UI/Tabs')
                },
                {
                    path: 'UI/BadgesLabelsProgressBars',
                    name: 'BadgesLabelsProgressBars',
                    component: () => import('@v/UI/BadgesLabelsProgressBars')
                },
                {
                    path: 'UI/AlertsTooltips',
                    name: 'AlertsTooltips',
                    component: () => import('@v/UI/AlertsTooltips')
                },
                {
                    path: 'UI/HelperCssClasses',
                    name: 'HelperCssClasses',
                    component: () => import('@v/UI/HelperCssClasses')
                },
                {
                    path: 'Forms/BasicForm',
                    name: 'BasicForm',
                    component: () => import('@v/Forms/BasicForm')
                },
                {
                    path: 'Tables/StaticTables',
                    name: 'StaticTables',
                    component: () => import('@v/Tables/StaticTables')
                },
                {
                    path:'Layouts/Grids',
                    name:'Grids',
                    component: () => import('@v/Layouts/Grids')
                }
            ]
        }
    ]
})
