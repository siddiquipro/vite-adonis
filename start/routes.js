"use strict";

const Route = use("Route");
const Env = use("Env");
const Helpers = use("Helpers");
const NODE_ENV = Env.get("NODE_ENV");

console.log(NODE_ENV);

const isProd = NODE_ENV != "development" ? true : false;

let data = {
	script: `<script type="module" src="http://localhost:3000/@vite/client"></script> <script type="module" src="http://localhost:3000/www/main.js"></script>`,
	css: false,
};

try {
	if (isProd) {
		const constants = use(Helpers.appRoot("constants"));
		const manifest = use(Helpers.publicPath("build/manifest.json"));
		data.manifest = manifest;
		data.script = `<script type="module" src="/build/${manifest[constants.ENTRY]["file"]}"></script>`;
		if (manifest[constants.ENTRY]["css"][0]) data.css = `<link rel="stylesheet" href="/build/${manifest[constants.ENTRY]["css"][0]}">`;
	}
} catch (error) {
	console.log("Prod manifest update failed", error);
}

Route.any("*", ({ view }) => {
	return view.render("welcome", data);
});
