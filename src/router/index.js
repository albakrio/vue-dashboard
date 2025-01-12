
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import NotFound from '../views/NotFound.vue'
import {ROUTE_PATHS}  from './routePaths'

const routes = [
  { path: ROUTE_PATHS.HOME, component: Home },
  { path: ROUTE_PATHS.SETTINGS, component: Settings },
  { path: ROUTE_PATHS.NOT_FOUND, component: NotFound }

]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
