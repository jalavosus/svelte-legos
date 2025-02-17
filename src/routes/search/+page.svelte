<script lang="ts">
	import type { PageServerData } from "./$types";
	import type { Brick } from "./brick";

	type Props = {
		data: PageServerData;
	};

	let { data }: Props = $props();

	let results: Brick[] = $state([]),
		query: string = $state("");

	function handleInput(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		if (!event.currentTarget.value) return;

		const query: string = event.currentTarget.value.toLowerCase();

		results = data.bricks.filter((b) => b.text.toLowerCase().includes(query));
		return;
	}
</script>

<div class="py:20 container mx-auto p-8 lg:py-36">
	<h1 class="text-2xl font-bold lg:text-4xl">
		{#if query}Results for <i class="text-prime">{query}</i> ({results.length})
		{:else}Search{/if}
	</h1>
	<label for="query" class="sr-only">Search Query</label>
	<input
		class="mt-4 w-full rounded-md border border-slate-600 bg-slate-100 px-3 py-1 text-lg"
		type="text"
		name="query"
		placeholder="Search Svelte Legos"
		oninput={handleInput}
		bind:value={query} />
	{#if results.length}
		<ul class="mt-4 space-y-4">
			{#each results as brick}
				{@const pre = brick.text.slice(0, brick.text.toLowerCase().indexOf(query.toLowerCase()))}

				{@const post = brick.text.substring(
					brick.text.toLowerCase().indexOf(query.toLowerCase()) + query.length
				)}

				{@const mid = brick.text.replace(pre, "").replace(post, "")}

				<li>
					<a href={brick.url} class="hover:text-prime">
						{pre}<span class="text-prime">{mid}</span>{post}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
