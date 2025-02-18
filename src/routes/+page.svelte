<script lang="ts">
	import type { PageData } from "./$types";
	import { base } from "$app/paths";
	import Feature from "./Feature.svelte";
	import { SiteTitle } from "./constants";

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<section class="py:20 container mx-auto p-8 lg:py-36">
	<div>
		<div class="max-w-xl space-y-4">
			<h1 class="text-second text-2xl font-bold tracking-wider lg:text-5xl dark:text-gray-50">
				svelte-<b class="text-prime">legos (blue)</b>
			</h1>
			<h3 class="text-xl font-light regular-text lg:text-3xl">{SiteTitle}</h3>
			<h3 class="text-md font-light regular-text lg:text-xl">
				Forked from <a href="https://github.com/ankurrsinghal/svelte-legos" class="text-oldprime"
					>ankurrsingal/svelte-legos</a
				>. Give them the credit they are due for building such an incredible library.
			</h3>
		</div>
		<div class="mt-6 lg:mt-12">
			<a
				href="{base}/guides"
				class="bg-primary inline-block rounded-lg px-4 py-2 text-sm text-white hover:underline lg:px-6 lg:py-3 lg:text-base">
				Get Started
			</a>
		</div>
	</div>
	<section class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
		<Feature icon="🎛" title="Feature Rich" description="200+ functions for you to choose from" />
		<Feature icon="🦾" title="Type Strong" description="Written in TypeScript, with full TS docs" />
		<Feature
			icon="🔋"
			title="SSR Friendly"
			description="Works perfectly with server-side rendering/generation" />
		<Feature
			icon="⚡"
			title="Fully tree shakeable"
			description="Only import what you want, nothing you don't." />
		<Feature
			icon="☁️"
			title="No bundler required"
			description="Usable via CDN, without any bundlers" />
		<Feature
			icon="🎪"
			title="Interactive demos"
			description="Documentation of functions also come with interactive demos!" />
	</section>

	<div class="bg-primary fixed right-0 bottom-0 left-0 z-10 p-4 text-center font-bold text-white">
		<a
			class="hover:underline"
			href="https://github.com/jalavosus/svelte-legos"
			target="_blank"
			rel="noreferrer"
		>
			Work In Progress! 🚜. Current status: {data.utilsLength} utilities.
			<br />
		</a>
	</div>
</section>
