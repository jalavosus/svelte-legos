<script lang="ts">
	import { focusAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let isFocused = $state(true);

	const toggleFocused = () =>
		isFocused = !isFocused
</script>

<DemoContainer>
	<div class="mb-4">
		<input class="px-3 py-2 border border-black rounded-md text-md" use:focusAction={isFocused} />
	</div>
	<button class={PrimaryButtonClassName} onclick={toggleFocused}>
		Toggle Focus
	</button>
</DemoContainer>
