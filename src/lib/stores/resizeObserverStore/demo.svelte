<script lang="ts">
	import { resizeObserverStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	let ref: HTMLElement | null = $state(null);

	let width = $state(0);
	let height = $state(0);

	function handler([entry]: ResizeObserverEntry[]) {
		width = entry.contentRect.width;
		height = entry.contentRect.height;
	}

	$effect(() => {
		if (ref) resizeObserverStore(ref, handler);
	})

	const newStringify = (): string => `width: ${width}\nheight: ${height}`

	let stringify = $state(newStringify());
	$effect(() => {
		stringify = newStringify();
	});
</script>

<DemoContainer>
	<p class="mb-4">Resize the box to see changes</p>
	<textarea
		bind:this={ref}
		bind:value={stringify}
		class="resize p-4 min-w-[100%] min-h-[100px] lg:min-w-[320px] lg:min-h-[100px] rounded-md"
	/>
</DemoContainer>
