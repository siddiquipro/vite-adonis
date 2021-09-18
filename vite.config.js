// vite.config.js

// import vue from "@vitejs/plugin-vue";
const { createVuePlugin } = require("vite-plugin-vue2");

export default ({ command }) => ({
	base: command === "serve" ? "" : "/build/",
	publicDir: "fake_dir_so_nothing_gets_copied",
	build: {
		manifest: true,
		outDir: "public/build",
		rollupOptions: {
			input: "www/main.js",
		},
	},
	plugins: [createVuePlugin()],
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: [".."],
		},
	},
});
