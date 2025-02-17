<script lang="ts">
	import type {Readable} from "svelte/store";
	import { elementBoundingStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	let ref: HTMLElement | null = $state(null);

	let rect: Readable<DOMRect> | null = $state(null);

	$effect(() => { if (ref !== null) rect = elementBoundingStore(ref) });
	$effect(() => { stringify = JSON.stringify($rect, null, 4) });
</script>

<DemoContainer>
	<div class="p-4">
		<textarea
			bind:this={ref}
			class="p-2 resize min-h-[250px] min-w-[250px] border border-slate-400 rounded-md"
		>
			{stringify}
		</textarea>
	</div>
</DemoContainer>
