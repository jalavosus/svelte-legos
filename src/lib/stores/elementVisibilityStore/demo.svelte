<script lang="ts">
	import type { Readable } from "svelte/store";
	import { elementVisibilityStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	let ref: HTMLElement | null = $state(null);
	let isVisible: Readable<boolean> = $derived(elementVisibilityStore(ref).isVisible);
</script>

<div class="relative">
	<DemoContainer>
		<div
			bind:this={ref}
			class="area relative z-20 z-60 max-w-100 rounded-md bg-white p-4 shadow-lg dark:bg-gray-800">
			Target Element (scroll down)
		</div>
		<div class="mt-4 h-[1000px]">
			<p>Scroll the window and watch element status in the bottom right corner.</p>
			<p>Info on the right bottom corner</p>
		</div>
	</DemoContainer>
	<div class="fixed right-3 bottom-3 shadow-lg">
		<DemoContainer>
			Element is
			<span class="text-prime">{$isVisible ? "inside" : "outside"}</span>
			the viewport
		</DemoContainer>
	</div>
</div>
