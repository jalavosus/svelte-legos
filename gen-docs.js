import fs from "fs";

function createDirectoriesFn(base, dirName) {
	return function(hookName) {
		const libDir = `${base}/${hookName}`;
		const dest = `./src/routes/guides/${dirName}/${hookName}`;

		try {
			fs.mkdirSync(dest);
		} catch (err) {
			console.error(err.message);
		}

		const createFiles = createFilesFn(dirName, libDir, hookName);

		fs.readdirSync(libDir).forEach(createFiles);
	}
}

function createFilesFn(dirName, libDir, hookName) {
	return function(fp) {
		const fullPath = `${libDir}/${fp}`;
		const dest = `./src/routes/guides/${dirName}/${hookName}/+page.svelte`;

		if (fp.endsWith(".svelte")) {
			fs.copyFileSync(fullPath, dest);
		}
	}
}

function generate(dirName) {
	const base = `./src/lib/${dirName}`;

	try {
		fs.mkdirSync(`./src/routes/guides/${dirName}`);
	} catch (e) {
		console.log(e.message);
	}

	const createDirectories = createDirectoriesFn(base, dirName);
	fs.readdirSync(base).forEach(createDirectories);

	fs.copyFileSync("./src/routes/guides/layout-hook.svelte", `./src/routes/guides/${dirName}/+layout.svelte`);
	fs.copyFileSync("./src/routes/guides/layout-hook.server.ts", `./src/routes/guides/${dirName}/+layout.server.ts`);
}

console.log(fs.readdirSync("./"));


[
	"actions",
	"stores",
	"derivatives",
	"middlewares",
	"stores",
	"transitions",
	"utilities",
	"watchers"
].forEach(generate)
