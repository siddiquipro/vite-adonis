"use strict";

const Route = use("Route");
const Env = use("Env");
const Helpers = use("Helpers");
const isProd = Env.get("NODE_ENV") != "development" ? true : false;
const constants = use(Helpers.appRoot("constants"));

let data = {
	script: `<script type="module" src="http://localhost:3000/@vite/client"></script> <script type="module" src="http://localhost:3000/www/main.js"></script>`,
	css: false,
};

if (isProd) {
	const manifest = use(Helpers.publicPath("build/manifest.json"));
	data.manifest = manifest;
	data.script = `<script type="module" src="/build/${manifest[constants.ENTRY]["file"]}"></script>`;
	if (manifest[constants.ENTRY]["css"][0]) data.css = `<link rel="stylesheet" href="/build/${manifest[constants.ENTRY]["css"][0]}">`;
}

Route.any("*", ({ view }) => {
	return view.render("welcome", data);
});
