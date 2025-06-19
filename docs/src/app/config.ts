import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {createI18n} from 'vue-i18n'
import i18nLocales from './i18n'
import { routes } from './routes'

const mappedRoutes = routes.map(route => ({
  ...route,
  component: () => import(`./pages/${route.page}`)
} as RouteRecordRaw))

export const currentLang = i18nLocales.enUS
export const i18n = createI18n({
  locale: 'enUS',
  messages: i18nLocales
})

export const router = createRouter({
  history: createWebHistory(),
  routes: mappedRoutes
})
