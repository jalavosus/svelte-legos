<script lang="ts">
	import { notifyAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";
	import type { NotificationType } from "$lib/utilities/notifications";

	let title = $state("Title");
	let description = $state("You can put your little description here.");
	let type: NotificationType | undefined = $state(undefined);
	let duration = $state(5000);
</script>

<DemoContainer>
	<div class="mb-4">
		<input class="text-md rounded-md border border-black px-3 py-2" bind:value={title} />
	</div>
	<div class="mb-4">
		<textarea class="text-md rounded-md border border-black px-3 py-2" bind:value={description}
		></textarea>
	</div>
	<div class="mb-4">
		<label class="mr-2">
			<input type="radio" name="type" value="success" bind:group={type} />
			Success
		</label>
		<label class="mr-2">
			<input type="radio" name="type" value="error" bind:group={type} />
			Error
		</label>
		<label class="mr-2">
			<input type="radio" name="type" value="warning" bind:group={type} />
			Warning
		</label>
		<label class="mr-2">
			<input type="radio" name="type" value="info" bind:group={type} />
			Info
		</label>
		<label class="mr-2">
			<input type="radio" name="type" value="" bind:group={type} />
			None
		</label>
	</div>
	<div class="mb-4">
		<label class="mr-2">
			Duration (in ms)
			<input class="text-md rounded-md border border-black px-3 py-2" bind:value={duration} />
		</label>
	</div>
	<button
		class={PrimaryButtonClassName}
		use:notifyAction={{
			title,
			description,
			type,
			duration
		}}>
		Notify
	</button>
</DemoContainer>
