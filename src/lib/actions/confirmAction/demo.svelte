<script lang="ts">
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
		<input class="demo-textarea" bind:value={title} />
	</div>
	<div class="mb-4">
		<textarea class="demo-textarea" bind:value={description}
		></textarea>
	</div>
	<div class="mb-4 flex w-1/6 flex-col">
		<label for="confirmTextInput">Confirm Button Text</label>
		<input
			id="confirmTextInput"
			class="demo-textarea"
			bind:value={confirmText} />
	</div>
	<div class="mb-4 flex w-1/6 flex-col">
		<label for="cancelTextInput">Cancel Button Text</label>
		<input
			id="cancelTextInput"
			class="demo-textarea"
			bind:value={cancelText} />
	</div>
	<button
		class={PrimaryButtonClassName}
		use:confirmAction={{
			title,
			description,
			confirmText,
			cancelText
		}}>
		Show Confirm Alert
	</button>
</DemoContainer>
