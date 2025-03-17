<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	let dots = ["."];

	let interval: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	onMount(() => {
		clearInterval(interval);
		interval = setInterval(() => {
			if (dots.length > 4) {
				dots = ["."];
			} else {
				dots = dots.concat(["."]);
			}
		}, 300);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<span class="inline-block w-5">
	{#each dots as dot, idx (idx)}
		<span>{dot}</span>
	{/each}
</span>
