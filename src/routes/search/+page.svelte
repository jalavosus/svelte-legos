<script lang="ts">
	import type {PageServerData} from "./$types";
	import type { Brick } from "./brick";

	type Props = {
		data: PageServerData;
	}

	let { data }: Props = $props();

	let results: Brick[] = $state([]),
		query: string = $state("");

	function handleInput(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		if (!event.currentTarget.value) return;

		const query: string = event.currentTarget.value.toLowerCase();

		results = data.bricks.filter(b => b.text.toLowerCase().includes(query));
		return;
	}
</script>

<div class="py:20 lg:py-36 container mx-auto p-8">
	<h1 class="text-2xl lg:text-4xl font-bold">
		{#if query}Results for <i class="text-prime">{query}</i> ({results.length})
		{:else}Search{/if}
	</h1>
	<label for="query" class="sr-only">Search Query</label>
	<input
		class="mt-4 px-3 py-1 text-lg border border-slate-600 rounded-md bg-slate-100 w-full"
		type="text"
		name="query"
		placeholder="Search Svelte Legos"
		oninput={handleInput}
		bind:value={query}
	/>
	{#if results.length}
		<ul class="mt-4 space-y-4">
			{#each results as brick}
				{@const pre = brick.text.slice(
					0,
					brick.text.toLowerCase().indexOf(query.toLowerCase())
				)}

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
