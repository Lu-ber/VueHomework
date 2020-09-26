// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 載入第三方套件
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap"


import App from "./App";
import router from "./router";
/* eslint-disable no-new */
Vue.use(VueAxios, axios);
axios.default.withCredentials = true;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});

router.beforeEach((to, from, next) => {
  console.log("to", to, "from", from, "next", next);
  if (to.meta.requireAuth) {
    const api = `${process.env.API_PATH}/api/user/check`;
    const vm = this;
    axios.post(api).then(response => {
      // console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/login"
        });
      }
    });
  } else {
    next();
  }
});
