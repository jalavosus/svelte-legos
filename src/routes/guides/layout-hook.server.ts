// noinspection DuplicatedCode

import fs from "fs";
export const prerender = true;

import lightTheme from "@shikijs/themes/github-light-default";
import darkTheme from "@shikijs/themes/github-dark";
import langSvelte from "@shikijs/langs-precompiled/svelte";
import langTS from "@shikijs/langs-precompiled/typescript";
import langJS from "@shikijs/langs-precompiled/javascript";


import { createHighlighterCoreSync } from "shiki/core";
import { createJavaScriptRawEngine } from "shiki/engine/javascript";

const REPO_BASE_URL = "https://github.com/jalavosus/svelte-legos/tree/master/src";
const REPO_HOOKS_URL = (itemType: string) => REPO_BASE_URL + "/lib/" + itemType;

const highlighter = createHighlighterCoreSync({
	themes: [
		lightTheme,
		darkTheme
	],
	langs: [
		langSvelte,
		langTS,
		langJS,
	],
	engine: createJavaScriptRawEngine()
});

function last<T>(arr: T[]) {
	return arr[arr.length - 1];
}

function typeOfObject(path: string) {
	return path.split("/")[2];
}

type HookMeta = {
	description: string;
};

type HookData = {
	hookName: string;
	meta?: HookMeta;
	code?: string;
	sourceCodeURL: string;
	demoCodeURL: string;
};

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
		demoCodeURL: REPO_HOOKS_URL(itemType.toLowerCase()) + `/${hookName}/demo.svelte`
	} as HookData;

	const meta = loadFile({ itemType, hookName, fileName: "meta.json" });
	if (meta) res.meta = JSON.parse(meta.toString());

	const usage = loadFile({ itemType, hookName, fileName: "usage.txt" });
	if (usage)
		res.code = highlighter.codeToHtml(usage.toString(), {
			lang: "svelte",
			themes: {
				light: "github-light-default",
				dark: "github-dark",
			},
		});

	return res;
}
