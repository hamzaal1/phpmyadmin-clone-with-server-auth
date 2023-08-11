import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: '/databases',
      name: 'databases',
      component: () => import("@/views/DataBasesView.vue")
    },
    {
      path: '/databases/:schema_name',
      name: 'expanded_database',
      component: () => import("@/views/ExpandedDatabaseView.vue")
    },
    {
      path: '/databases/:schema_name/:table',
      name: 'expanded_table',
      component: () => import("@/views/ExpandedTableView.vue")
    }
  ]
})

export default router
