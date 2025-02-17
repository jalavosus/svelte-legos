<script lang="ts">
	import type { Readable } from "svelte/store";
	import { elementBoundingStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	let ref: HTMLElement | null = $state(null);
	let rect: Readable<DOMRect> | null = $derived(ref ? elementBoundingStore(ref) : null);
	let stringify = $derived(rect ? JSON.stringify($rect, null, 4) : "");
</script>

<DemoContainer>
	<div class="p-4">
		<textarea
			bind:this={ref}
			class="min-h-[250px] min-w-[250px] resize rounded-md border border-slate-400 p-2">
			{stringify}
		</textarea>
	</div>
</DemoContainer>
