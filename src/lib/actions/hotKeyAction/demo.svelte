<script lang="ts">
	import { hotKeyAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let timesClicked = $state(0);
	let timesClickedCallback = $state(0);

	const incrementClicked = () => timesClicked++,
		incrementClickedCallback = () => timesClickedCallback++;
</script>

<DemoContainer>
	<div class="flex items-center">
		<button
			class={PrimaryButtonClassName}
			use:hotKeyAction={{ shift: true, code: "Digit1" }}
			on:click={incrementClicked}
		>
			Triggers a click on Shift + 1
		</button>
		<p class="ml-4">
			Clicked: {timesClicked}
		</p>
	</div>
	<div class="flex items-center mt-4">
		<div
			class="inline-block text-sm px-4 py-2 rounded-md border border-black"
			use:hotKeyAction={{ shift: true, meta: true, code: "KeyX", cb: incrementClickedCallback }}
			aria-hidden="true"
		>
			Triggers a callback on Shift + Cmd + X
		</div>
		<p class="ml-4">
			Clicked: {timesClickedCallback}
		</p>
	</div>
</DemoContainer>
