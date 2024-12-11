// import HomePage from "../pages/HomePage.vue";

export default [
    {
        path: '/app1',
        component: () => import("../pages/HomePage.vue"),
    }
]
