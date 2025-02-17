<script lang="ts">
	import { eyeDropperStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";

	const { open, color } = eyeDropperStore("white");
</script>

<DemoContainer>
	<PrimaryButton onclick={open}>Open EyeDropper</PrimaryButton>

	<div
		class="mt-4 flex h-20 w-60 items-center justify-center rounded-md p-4 text-sm"
		style:background={$color}>
		Color will appear here.
	</div>
</DemoContainer>
