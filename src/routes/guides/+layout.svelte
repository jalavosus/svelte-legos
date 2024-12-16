<script lang="ts">
	import type { LayoutData } from "./$types";
	import type { HTMLButtonAttributes } from "svelte/elements";

	import { page } from "$app/state";
	import MenuIcon from "./MenuIcon.svelte";
	import GuideCategory from "./GuideCategory.svelte";
	import type { GuideCategoryProps } from "./guide";

	type Props = {
		data: LayoutData;
	}

	let { data, children }: Props & HTMLButtonAttributes = $props();

	let categories: GuideCategoryProps[] = $derived([
		{ label: "Actions", path: "actions", guides: data.actions },
		{ label: "Stores", path: "stores", guides: data.stores },
		{ label: "Utilities", path: "utilities", guides: data.utilities },
		{ label: "Transitions", path: "transitions", guides: data.transitions },
		{ label: "Store Middlewares", path: "middlewares", guides: data.middlewares },
		{ label: "Store Derivatives", path: "derivatives", guides: data.derivatives },
		{ label: "Watchers", path: "watchers", guides: data.watchers }
	]);

	let isMenuOpened = $state(false);

	let currentPath = $derived(page.data.hookName);

	let sidebarClassNames = $derived(`
		flex
		flex-col
		bg-slate-100
		lg:bg-gray-50
		p-10
		fixed
		top-0
		left-0
		h-screen
		border-r
		border-black
		z-10
		w-full
		max-w-[300px]
		lg:block
		lg:z-0
		lg:p-0
		lg:py-16
		lg:left-auto
		overflow-auto
		${isMenuOpened ? "visible" : "hidden"}
	`);

	function handleClick() {
		isMenuOpened = !isMenuOpened;
	}
</script>

<svelte:head>
	<style>
	:root {
		--code-bg: var(--back-light);
		--code-base: hsl(45, 7%, 35%);
		--code-comment: hsl(0, 0%, 41%);
		--code-keyword: hsl(204, 88%, 35%);
		--code-function: hsl(19, 67%, 44%);
		--code-string: hsl(41, 37%, 38%);
		--code-number: hsl(120, 100%, 25%);
		--code-template-string: hsl(2, 80%, 47%);
		--code-tags: var(--code-function);
		--code-important: var(--code-string);
	}

	pre {
		tab-size: 2;
		-moz-tab-size: 2;
	}

	.code-block pre {
		background-color: var(--code-bg);
		color: var(--code-base);
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 0 0 1rem;
		font-size: 14px;
	}

	.code-block pre code,
	.token {
		color: var(--code-base);
	}

	.token.tag,
	.token.attr-value .attr-equals {
		color: var(--code-function);
	}

	.token.string,
	.token.interpolation-punctuation,
	.token.attr-value,
	.token.inserted {
		color: var(--code-string);
	}

	.token.builtin,
	.token.function {
		color: var(--code-function);
	}

	.token.keyword,
	.token.boolean,
	.token.attr-name,
	.token.namespace {
		color: var(--code-keyword);
	}

	.token.comment {
		color: var(--code-comment);
	}

	.token.deleted {
		color: #fc9b9b;
	}

	.token.template-string .interpolation-punctuation,
	.token.template-string .string {
		color: var(--code-template-string);
	}
	</style>
</svelte:head>

<div>
	<div class="p-4 border-b border-black lg:hidden">
		<button
			class="relative flex items-center cursor-pointer"
			onclick={handleClick}
		>
			<span class="w-6 h-6">
				<MenuIcon />
			</span>
			<span class="ml-4">Menu</span>
		</button>
	</div>
	<section class="lg:pl-80" id="main-container">
		<div class="p-8 pb-20">
			{@render children?.()}
		</div>
	</section>
	<section
		class={sidebarClassNames
			.split("\n")
			.map((c) => c.trim())
			.filter(Boolean)
			.join(" ")}
	>
		<button
			onclick={handleClick}
			class="monospace text-sm absolute right-4 top-4 w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center cursor-pointer lg:hidden"
		>
			╳
		</button>
		<div class="fixed top-0 bottom-0 bg-black right-0"></div>
		<ul class="space-y-3 lg:mt-8 lg:p-4 p-2">
			<li>
				<a
					href="/guides/"
					class="hover:underline {!currentPath && page.route.id === '/guides'
						? 'font-bold underline'
						: ''}"
				>
					Getting Started
				</a>
			</li>
			{#each categories as category}
				<GuideCategory
					label={category.label}
					path={category.path}
					guides={category.guides}
				/>
			{/each}
		</ul>
	</section>
</div>
