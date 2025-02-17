<script>
	import { clickToCopyAction, messagesStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	function handleCopyDone() {
		messagesStore("Copied!");
	}

	let text = "Text to copy";
</script>

<DemoContainer>
	<div>
		<input class="text-md mb-4 rounded-md border border-black px-3 py-2" bind:value={text} />
	</div>
	<div>
		<button
			class={PrimaryButtonClassName}
			use:clickToCopyAction={text}
			on:copy-done={handleCopyDone}>
			Click to copy
		</button>
	</div>
</DemoContainer>
