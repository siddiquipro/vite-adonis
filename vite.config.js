import constants from "./constants";
const { createVuePlugin } = require("vite-plugin-vue2");

export default ({ command }) => ({
	base: command === "serve" ? "" : "/build/",
	publicDir: "fake_dir_so_nothing_gets_copied",
	build: {
		manifest: true,
		outDir: "public/build",
		rollupOptions: {
			input: constants.ENTRY, //"www/main.js",
		},
	},
	plugins: [createVuePlugin()],
	server: {
		fs: {
			allow: [".."], // Allow serving files from one level up to the project root
		},
	},
});
