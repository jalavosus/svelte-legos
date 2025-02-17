<script lang="ts">
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { hoverAction } from "$lib";
	import Text from "$lib/shared/components/Text.svelte";

	let text = "No!";
	function handleHover(e: CustomEvent<{ hover: boolean }>) {
		text = e.detail.hover ? "Yes!" : "No!";
	}
</script>

<DemoContainer>
	<div
		class="bg-prime mb-4 flex h-20 w-20 items-center justify-center rounded-lg text-sm text-white"
		use:hoverAction
		onhover={handleHover}>
		Hover me
	</div>
	<Text>Mouse in the element: <span class="text-prime">{text}</span></Text>
</DemoContainer>
