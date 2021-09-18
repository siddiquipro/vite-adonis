const { hooks } = require("@adonisjs/ignitor");

const LOAD_MANIFEST = (path) => {
	const fs = use("fs");
	let manifest = null;
	try {
		if (fs.existsSync(path)) manifest = use(path);
	} catch (err) {
		manifest = null;
		console.error(err);
	}
	return manifest;
};

hooks.after.providersBooted(async () => {
	const View = use("View");
	const constants = require("../constants");
	const manifest = LOAD_MANIFEST("../public/build/manifest.json");

	let SCRIPT = `<script type="module" src="http://localhost:3000/@vite/client"></script>
  <script type="module" src="http://localhost:3000/${constants.ENTRY}"></script>`;

	let CSS = "";

	if (manifest) {
		const manObj = manifest[constants.ENTRY];
		SCRIPT = `<script type="module" src="/build/${manObj.file}"></script>`;
		if (manObj.css && manObj.css.length > 0) CSS = `<link rel="stylesheet" href="/build/${manObj.css[0]}">`;
	}

	View.global("VITE", (css) => {
		if (css) return CSS;
		return SCRIPT;
	});
});
