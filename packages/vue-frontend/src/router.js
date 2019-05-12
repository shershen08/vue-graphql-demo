import Vue from "vue";
import Router from "vue-router";

import Catalogue from './components/Catalogue.vue'
import AdminPanel from './components/AdminPanel.vue'

Vue.use(Router);

const routes = [
    { path: '/', component: Catalogue },
    { path: '/admin', component: AdminPanel }
  ]

export default new Router({
    routes
})