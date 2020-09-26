import Vue from 'vue'
import VueRouter from 'vue-router'
//官方元件

import Login from '@/components/allpages/Login'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/allpages/Products'
//自訂的分頁元件

Vue.use(VueRouter);

export default new VueRouter({  
  routes:[
    {
      path:'*',
      redirect:'login'
    }, //若使用者隨意輸入路徑還是會回到登入頁面
    {
      name:'Login',
      path:'/login',
      component: Login,
    },
    {
      name:'Dashboard',
      path:'/dashboard',
      component: Dashboard,
      children:[
        {
          path:'products',
          name:'product',
          component: Products,
          meta:{requireAuth: true},
        }
      ]
    },
  ]
})