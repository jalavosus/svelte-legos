import stylistic from "@stylistic/eslint-plugin-ts";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default ts.config(
	prettier,
	...ts.configs.recommended,
	...svelte.configs["flat/recommended"],
	...svelte.configs["flat/prettier"],
	{
		plugins: {
			"@stylistic": stylistic
		}
	},
	{
		rules: {
			quotes: ["error", "double"],
			"@typescript-eslint/ban-ts-comment": [
				"error",
				{
					"ts-ignore": "allow-with-description"
				}
			]
		}
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ["**/*.svelte"],

		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: [
			"build/",
			".svelte-kit/",
			"dist/",
			".DS_Store",
			"node_modules/",
			"/package",
			".env",
			".env.*",
			"!.env.example",
			// Ignore files for PNPM, NPM and YARN
			"pnpm-lock.yaml",
			"package-lock.json",
			"yarn.lock",
			"src/routes/guides/"
		]
	}
);
