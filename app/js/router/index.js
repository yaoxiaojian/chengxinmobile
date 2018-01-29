import Vue from "vue"
import Router from "vue-router"
import axios from "axios"
import VueAxios from "vue-axios"
import Home from "../home/index.vue"
import Sale from "../sale/index.vue"
import Displace from "../displace/index.vue"
import Buy from "../buy/index.vue"
import Identify from "../identify/index.vue"
import Search from "../search/index.vue"
import Dealer from "../dealer/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/sale",
            name: "sale",
            component: Sale,
        },
        {
            path: "/displace",
            name: "displace",
            component: Displace,
        },
        {
            path: "/buy",
            name: "buy",
            component: Buy,
        },
        {
            path: "/identify",
            name: "identify",
            component: Identify,
        },
        {
            path: "/search",
            name: "search",
            component: Search,
        }, {
            path: "/dealer",
            name: "dealer",
            component: Dealer,
        },

    ],
})
