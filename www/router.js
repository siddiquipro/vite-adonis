import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

let router = new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: Home },
		{ path: "/about", component: About },
		{ path: "*", component: NotFound },
	],
});

export default router;
