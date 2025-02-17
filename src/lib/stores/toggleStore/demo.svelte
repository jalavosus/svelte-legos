<script lang="ts">
	import { toggleStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";

	const { toggle, on, off, value } = toggleStore();

	let stringify = $derived($value ? "ON" : "OFF");
</script>

<DemoContainer>
	<div>Value: {stringify}</div>
	<div class="mt-6 space-x-4">
		<PrimaryButton onclick={toggle}>Toggle</PrimaryButton>
		<PrimaryButton onclick={on}>Set On</PrimaryButton>
		<PrimaryButton onclick={off}>Set off</PrimaryButton>
	</div>
</DemoContainer>
