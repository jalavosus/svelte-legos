<script lang="ts">
	import { elementSizeStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	let ref: HTMLElement | null = $state(null);
	const _ref = () => ref;
	let size = $state(elementSizeStore(_ref()));
	$effect(() => {
		size = elementSizeStore(ref);
	});
	let stringify = $state(`width: ${$size.width}\nheight: ${$size.height}`);
	$effect(() => {
		stringify = `width: ${$size.width}\nheight: ${$size.height}`;
	});
</script>

<DemoContainer>
	<p class="mb-4">Resize the box to see changes</p>
	<textarea
		bind:this={ref}
		bind:value={stringify}
		class="min-h-[100px] min-w-[100%] resize rounded-md p-4 lg:min-h-[100px] lg:min-w-[320px]"
	></textarea>
</DemoContainer>
