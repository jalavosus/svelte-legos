<script lang="ts">
	import type { PageData } from "./$types";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type Props = {
		data: PageData;
	}

	let { data, children }: Props & HTMLButtonAttributes = $props();
</script>

<div id="legos-main-container">
	<div>
		<h1 class="text-2xl lg:text-4xl font-bold dark:text-gray-50">{data.hookName}</h1>
		<p class="mt-4 dark:text-gray-50">
			{data.meta.description}
		</p>
	</div>
	<div class="my-20">
		<h1 class="text-xl lg:text-2xl dark:text-gray-50">Demo</h1>
		<div>
			{@render children?.()}
		</div>
	</div>
	<div class="my-20">
		<h1 class="text-xl lg:text-2xl dark:text-gray-50">Usage</h1>
		{#if data.code}
			<div class="mt-4 p-4 text-sm overflow-auto border border-slate-600 rounded-md bg-slate-100 dark:bg-slate-800 dark:text-gray-50">
				<pre><code>{@html data.code}</code></pre>
			</div>
		{/if}
	</div>
	<div>
		<h1 class="text-xl lg:text-2xl mb-4 dark:text-gray-50">Code</h1>
		<ul class="flex space-x-4">
			<li>
				<a
					class="bg-prime px-4 py-2 text-white rounded-md text-sm hover:underline"
					href={data.sourceCodeURL}
					target="_blank"
					rel="noreferrer">Source</a
				>
			</li>
			<li>
				<a
					class="bg-prime px-4 py-2 text-white rounded-md text-sm hover:underline"
					href={data.demoCodeURL}
					target="_blank"
					rel="noreferrer">Demo</a
				>
			</li>
		</ul>
	</div>
</div>
