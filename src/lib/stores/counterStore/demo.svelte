<script lang="ts">
	import { counterStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";

	const { counter, inc, dec, set, reset } = counterStore();
</script>

<DemoContainer>
	<div>Counter: {$counter}</div>
	<div class="mt-6 flex flex-col items-start space-y-2">
		<PrimaryButton onclick={() => inc()}>Increment</PrimaryButton>
		<PrimaryButton onclick={() => dec()}>Decrement</PrimaryButton>
		<PrimaryButton onclick={() => inc(5)}>Increment (+5)</PrimaryButton>
		<PrimaryButton onclick={() => dec(5)}>Decrement (-5)</PrimaryButton>
		<PrimaryButton onclick={() => set(100)}>Set (100)</PrimaryButton>
		<PrimaryButton onclick={() => reset()}>Reset</PrimaryButton>
	</div>
</DemoContainer>
