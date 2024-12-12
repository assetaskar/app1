import {createRouter, /*createWebHistory, */createWebHashHistory} from 'vue-router'
import routes from './routes'

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
