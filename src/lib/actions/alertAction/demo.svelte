<script>
	import { alertAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let title = "Alert Title";
	let description = "You can put your little description here.";
</script>

<DemoContainer>
	<div class="mb-4">
		<input class="demo-textarea" bind:value={title} />
	</div>
	<div class="mb-4">
		<textarea class="demo-textarea" bind:value={description}></textarea>
	</div>
	<button
		class={PrimaryButtonClassName}
		use:alertAction={{
			title,
			description
		}}>
		Show Alert
	</button>
</DemoContainer>
