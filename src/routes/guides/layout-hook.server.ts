import Prism from "prismjs";
import "../../prism-svelte";
import fs from "fs";
export const prerender = true;

const REPO_BASE_URL = "https://github.com/jalavosus/svelte-legos/tree/master/src";
const REPO_HOOKS_URL = (itemType: string) => REPO_BASE_URL + "/lib/" + itemType;

function last<T>(arr: T[]) {
	return arr[arr.length - 1];
}

function typeOfObject(path: string) {
	return path.split("/")[2];
}

type HookMeta = {
	description: string;
}

type HookData = {
	hookName: string;
	meta?: HookMeta;
	code?: string;
	sourceCodeURL: string;
	demoCodeURL: string;
}

interface LoadFileParams {
	itemType: string;
	hookName: string;
	fileName: string;
}

const mkBaseFilePath = (itemType: string, hookName: string): string =>
	`./src/lib/${itemType.toLowerCase()}/${hookName}`;

function loadFile({ itemType, hookName, fileName }: LoadFileParams): Buffer | null {
	let res: Buffer;

	try {
		res = fs.readFileSync(mkBaseFilePath(itemType, hookName) + `/${fileName}`);
	} catch (err) {
		console.error(err);

		return null;
	}

	return res;
}

export async function load({ route }: any) {
	const itemType = typeOfObject(route.id);
	const hookName: string = last(route.id.split("/"));

	const res: HookData = {
		hookName,
		sourceCodeURL: REPO_HOOKS_URL(itemType.toLowerCase()) + `/${hookName}/index.ts`,
		demoCodeURL:  REPO_HOOKS_URL(itemType.toLowerCase()) + `/${hookName}/demo.svelte`,
	} as HookData;

	const meta = loadFile({ itemType, hookName, fileName: "meta.json" });
	if (meta)
		res.meta = JSON.parse(meta.toString());

	const usage = loadFile({ itemType, hookName, fileName: "usage.txt" });
	if (usage)
		res.code = Prism.highlight(usage.toString(), Prism.languages.svelte, "svelte").trim();

	return res;
}
