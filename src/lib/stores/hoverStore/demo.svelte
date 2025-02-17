<script lang="ts">
	import type { Readable } from "svelte/store";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { hoverStore } from "$lib";
	import Text from "$lib/shared/components/Text.svelte";

	let ref: HTMLDivElement | null = $state(null);
	let isHover: Readable<boolean> = $derived(hoverStore(ref));
</script>

<DemoContainer>
	<div
		class="bg-prime mb-4 flex h-20 w-20 items-center justify-center rounded-lg text-sm text-white"
		bind:this={ref}>
		Hover me
	</div>
	<Text>Mouse in the element: <span class="text-prime">{$isHover}</span></Text>
</DemoContainer>
