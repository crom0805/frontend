const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '/Dashboard', alias:'/', component: () => import('pages/Dashboard.vue')},
      {path: '/Dashboard2', component: () => import('pages/Dashboard2.vue')},
      {path: '/UserList', component: () => import('pages/user/UserList.vue')},
    ]
  },

  {
    path: '/template',
    component: () => import('layouts/template/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/template/Dashboard.vue')},
      {path: 'Dashboard2', component: () => import('pages/template/Dashboard2.vue')},
      {path: 'Profile', component: () => import('pages/template/UserProfile.vue')},
      {path: 'Map', component: () => import('pages/template/Map.vue')},
      {path: 'MapMarker', component: () => import('pages/template/MapMarker.vue')},
      {path: 'TreeTable', component: () => import('pages/template/TreeTable.vue')},
      {path: 'StreetView', component: () => import('pages/template/StreetView.vue')},
      {path: 'Cards', component: () => import('pages/template/Cards.vue')},
      {path: 'Tables', component: () => import('pages/template/Tables.vue')},
      {path: 'Contact', component: () => import('pages/template/Contact.vue')},
      {path: 'Checkout', component: () => import('pages/template/Checkout.vue')},
      {path: 'Ecommerce', component: () => import('pages/template/ProductCatalogues.vue')},
      {path: 'Pagination', component: () => import('pages/template/Pagination.vue')},
      {path: 'Charts', component: () => import('pages/template/Charts.vue')},
      {path: 'Calendar', component: () => import('pages/template/Calendar.vue')},
      {path: 'Directory', component: () => import('pages/template/Directory.vue')},
      {path: 'Footer', component: () => import('pages/template/Footer.vue')},
      {path: 'CardHeader', component: () => import('pages/template/CardHeader.vue')},
      {path: 'Lock', component: () => import('pages/template/LockScreen.vue')},
      {path: 'Lock-2', component: () => import('pages/template/LockScreen-2.vue')},
      {path: 'Mail', component: () => import('layouts/template/Mail.vue')},
      {path: 'Maintenance', component: () => import('pages/template/Maintenance.vue')},
      {path: 'Pricing', component: () => import('pages/template/Pricing.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/Login',
    component: () => import('pages/user/Login.vue')
  }
]

export default routes
