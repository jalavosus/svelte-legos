<script lang="ts">
	import { longPressAction, messagesStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let duration = $state(2000);
	function handleLongPress() {
		messagesStore("Pressed!");
	}
</script>

<DemoContainer>
	<label>
		<input type="range" bind:value={duration} max={2000} step={100} />
		{duration}ms
	</label>

	<div class="my-4">
		<button
			class={PrimaryButtonClassName}
			use:longPressAction={duration}
			onlongpress={handleLongPress}>
			press and hold
		</button>
	</div>
</DemoContainer>
