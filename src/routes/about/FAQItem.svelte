<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		question: string | Snippet;
		answer: string | Snippet;
	}

	let { question, answer }: Props = $props();
</script>

<li>
	<div class="flex flex-col space-y-1 dark:text-gray-50">
		<div>
			{#if typeof question === "string"}
				<p class="text-2xl">{question}</p>
			{:else}
				{@render question()}
			{/if}
		</div>
		<div class="ml-5">
			{#if typeof answer === "string"}
				<p class="text-lg">{answer}</p>
			{:else}
				{@render answer()}
			{/if}
		</div>

	</div>
</li>