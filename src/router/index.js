import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberTable from '../components/MemberTable.vue'
import RecordTable from '../components/IllegalRecordTable.vue'
import BusTable from '../components/BusTable.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children:
            [
                {
                    path: '/member',
                    component: MemberTable,
                },
                {
                    path: '/record',
                    component: RecordTable,
                },
                {
                    path: '/bus',
                    component: BusTable,
                }
            ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
