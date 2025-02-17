<script lang="ts">
	import { messagesStore } from "$lib";
	import type {MessageType} from "$lib/types/messages";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let message = $state("Here is your message!");
	let type: MessageType = $state("info" as MessageType);
	function handleClick() {
		messagesStore(message, type);
	}
</script>

<DemoContainer>
	<div class="mb-4">
		<label class="mr-4" for="message">Message Contents:</label>
		<input
			id="message"
			class="px-3 py-2 border border-black rounded-md text-md"
			bind:value={message}
		/>
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
			Info (default)
		</label>
	</div>
	<button class={PrimaryButtonClassName} on:click={handleClick}> Show Message </button>
</DemoContainer>
