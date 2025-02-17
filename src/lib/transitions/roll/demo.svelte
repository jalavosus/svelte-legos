<script lang="ts">
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { roll } from "$lib";
	import type { Direction } from "./index";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let isVisible = $state(true);
	let delay = $state(0);
	let duration = $state(600);
	let direction = $state("top" as Direction);
</script>

<DemoContainer>
	<div class="mb-8">
		<div class="flex items-center space-x-2">
			<label for="delay">Delay:</label>
			<input type="range" bind:value={delay} min={0} step={100} max={1000} />
			<span>{delay}ms</span>
		</div>
		<div class="mt-4 flex items-center space-x-2">
			<label for="distance">Duration:</label>
			<input type="range" bind:value={duration} min={100} step={100} max={1000} />
			<span>{duration}ms</span>
		</div>
		<div class="mt-4 flex items-center space-x-2">
			<label for="distance">Direction:</label>
			<select bind:value={direction} class="rounded-md border border-black px-2 py-1">
				<option>top</option>
				<option>bottom</option>
				<option>left</option>
				<option>right</option>
			</select>
		</div>
	</div>
	<div>
		<label class={PrimaryButtonClassName} for="is-visible">{isVisible ? "Hide" : "Show"}</label>
		<input class="hidden opacity-0" id="is-visible" type="checkbox" bind:checked={isVisible} />
	</div>
	<br />
	<div class="h-28 w-28">
		{#if isVisible}
			<div
				transition:roll|local={{ delay, duration, direction }}
				class="bg-prime flex h-28 w-28 items-center justify-center p-4 text-sm text-white">
			</div>
		{/if}
	</div>
</DemoContainer>
