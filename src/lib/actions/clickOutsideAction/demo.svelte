<script lang="ts">
	import { clickOutsideAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";
	import Text from "$lib/shared/components/Text.svelte";

	let showModal = true;
</script>

<DemoContainer>
	<PrimaryButton onclick={() => (showModal = true)}>Show Modal</PrimaryButton>
	{#if showModal}
		<div
			class="fixed top-1/2 left-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-black bg-slate-300 p-4 shadow-2xl"
			use:clickOutsideAction
			onclickoutside={() => (showModal = false)}>
			<Text>Click outside me!</Text>
		</div>
		<div
			class="fixed top-1/2 left-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-black bg-slate-300 p-4 shadow-2xl"
			use:clickOutsideAction={() => (showModal = false)}>
			<Text>Click outside me!</Text>
		</div>
	{/if}
</DemoContainer>
