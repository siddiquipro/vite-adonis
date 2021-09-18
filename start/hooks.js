const { hooks } = require("@adonisjs/ignitor");
const path = require("path");

hooks.after.providersBooted(async () => {
	const View = use("View");
	const Env = use("Env");
	const Helpers = use("Helpers");

	const constants = require(path.join(__dirname, "..", "constants.js"));

	let SCRIPT = `<script type="module" src="http://localhost:3000/@vite/client"></script>
  <script type="module" src="http://localhost:3000/${constants.ENTRY}"></script>`;

	let CSS = "";

	const GET_MANIFEST = () => {
		const node_env = Env.get("NODE_ENV", process.env.NODE_ENV);
		if (node_env == "development") return false;
		try {
			const manifest = require(Helpers.publicPath("build/manifest.json"));
			if (manifest) {
				const manObj = manifest[constants.ENTRY];
				SCRIPT = `<script type="module" src="/build/${manObj.file}"></script>`;
				if (manObj.css && manObj.css.length > 0) CSS = `<link rel="stylesheet" href="/build/${manObj.css[0]}">`;
			}
		} catch (error) {
			console.log(error);
		}
	};

	View.global("VITE", (css) => {
		GET_MANIFEST();
		if (css) return CSS;
		return SCRIPT;
	});

	View.global("PATH", (f) => {
		return Helpers.publicPath(f);
	});
});
