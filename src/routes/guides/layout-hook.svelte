<script lang="ts">
	import type { PageData } from "./$types";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type Props = {
		data: PageData;
	};

	let { data, children }: Props & HTMLButtonAttributes = $props();
	
	const links = [
		{href: data.sourceCodeURL, label: "Source"},
		{href: data.demoCodeURL, label: "Demo"},
	]
</script>

<div id="legos-main-container">
	<div>
		<h1 class="text-2xl font-bold lg:text-4xl dark:text-gray-50">{data.hookName}</h1>
		<p class="mt-4 dark:text-gray-50">
			{data.meta.description}
		</p>
	</div>
	<div class="my-20" id="demoContainer">
		<h1 class="text-xl lg:text-2xl dark:text-gray-50">Demo</h1>
		<div class="dark:bg-demo dark:text-gray-50">
			{@render children?.()}
		</div>
	</div>
	{#if data.code}
		<div class="mt-20 mb-10" id="usageContainer">
			<h1 class="text-xl lg:text-2xl dark:text-gray-50">Usage</h1>
			<div
				class="p-1 mt-4 overflow-auto rounded-md border border-slate-600 text-sm"
			>
				{@html data.code}
			</div>
		</div>
	{/if}
	<div>
		<h1 class="mb-4 text-xl lg:text-2xl dark:text-gray-50">Code</h1>
		<ul class="flex space-x-4">
			{#each links as link}
				<li>
					<a
						class="bg-primary rounded-md px-4 py-2 text-sm text-white hover:underline"
						href={link.href}
						target="_blank"
						rel="noreferrer">{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
