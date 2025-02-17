<script lang="ts">
	import "../app.css";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import Header from "./Header.svelte";
	import { SiteDescription, SiteName, SiteTitle } from "./constants";

	let { children }: HTMLButtonAttributes = $props();
</script>

<svelte:head>
	<title>{SiteName} • {SiteTitle}</title>
	<meta charset="UTF-8" />
	<meta name="twitter:title" content={SiteName} />
	<meta name="twitter:description" content={SiteTitle} />
	<meta name="description" content={SiteDescription} />

	<link href="https://sveltelegos.com/" rel="canonical" />

	<meta property="og:title" content={SiteName} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sveltelegos.com" />

	<meta
		name="keywords"
		content="sveltejs utilities, sveltejs actions, svelte actions, svelte kit actions, sveltejs stores, sveltejs use, svelte use, svelte, sveltejs, sveltekit, svelte-kit" />
</svelte:head>

<div>
	<Header />
	<main class="min-h-[100vh] w-full pt-16">
		<div class="container mx-auto">
			{@render children?.()}
		</div>
	</main>
</div>
