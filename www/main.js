// import "vite/modulepreload-polyfill";
import "./css/app.scss";
import "./bootstrap";

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import App from "./App.vue";
import Buefy from "buefy";

Vue.use(Buefy);
Vue.use(VueRouter);

new Vue({
	el: "#app",
	router,
	render: (h) => h(App),
});
