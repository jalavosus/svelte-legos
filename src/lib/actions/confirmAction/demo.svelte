<script>
	import { confirmAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let title = $state("Alert Title");
	let description = $state("You can put your little description here.");
	let confirmText = $state("OK");
	let cancelText = $state("Cancel");
</script>

<DemoContainer>
	<div class="mb-4">
		<input class="px-3 py-2 border border-black rounded-md text-md" bind:value={title} />
	</div>
	<div class="mb-4">
		<textarea class="px-3 py-2 border border-black rounded-md text-md" bind:value={description}></textarea>
	</div>
	<div class="mb-4 flex flex-col w-1/6">
		<label for="confirmTextInput">Confirm Button Text</label>
		<input id="confirmTextInput" class="px-3 py-2 border border-black rounded-md text-md" bind:value={confirmText} />
	</div>
	<div class="mb-4 flex flex-col w-1/6">
		<label for="cancelTextInput">Cancel Button Text</label>
		<input id="cancelTextInput" class="px-3 py-2 border border-black rounded-md text-md" bind:value={cancelText} />
	</div>
	<button
		class={PrimaryButtonClassName}
		use:confirmAction={{
			title,
			description,
			confirmText,
			cancelText,
		}}
	>
		Show Confirm Alert
	</button>
</DemoContainer>
