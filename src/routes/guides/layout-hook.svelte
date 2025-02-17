<script lang="ts">
	import type { PageData } from "./$types";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type Props = {
		data: PageData;
	};

	let { data, children }: Props & HTMLButtonAttributes = $props();
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
		<div class="my-20" id="usageContainer">
			<h1 class="text-xl lg:text-2xl dark:text-gray-50">Usage</h1>
			<div
				class="mt-4 overflow-auto rounded-md border border-slate-600 bg-slate-100 p-4 text-sm dark:bg-slate-800 dark:text-gray-50">
				<pre><code>{@html data.code}</code></pre>
			</div>
		</div>
	{/if}
	<div>
		<h1 class="mb-4 text-xl lg:text-2xl dark:text-gray-50">Code</h1>
		<ul class="flex space-x-4">
			<li>
				<a
					class="bg-prime rounded-md px-4 py-2 text-sm text-white hover:underline"
					href={data.sourceCodeURL}
					target="_blank"
					rel="noreferrer">Source</a>
			</li>
			<li>
				<a
					class="bg-prime rounded-md px-4 py-2 text-sm text-white hover:underline"
					href={data.demoCodeURL}
					target="_blank"
					rel="noreferrer">Demo</a>
			</li>
		</ul>
	</div>
</div>
