<script lang="ts">
	import { scrollToBottomAction, hotKeyAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	let messages: string[] = $state(
		Array(10)
			.fill(0)
			.map((_, i) => new Date().toDateString()) // eslint-disable-line @typescript-eslint/no-unused-vars -- not sure what's going on here
	);

	let currentMessage = $state("");

	function addMessage() {
		if (currentMessage.trim().length > 0) {
			messages = messages.concat([currentMessage]);
			currentMessage = "";
		}
	}
</script>

<DemoContainer>
	<div
		class="flex h-60 flex-col items-start space-y-4 overflow-auto rounded-md bg-slate-200 p-4"
		use:scrollToBottomAction>
		{#each messages as message, idx (idx)}
			<div class="bg-prime rounded-md px-3 py-2 text-sm text-white">{message}</div>
		{/each}
	</div>
	<div class="mt-4">
		<input
			placeholder="Enter message and press enter"
			bind:value={currentMessage}
			use:hotKeyAction={{ code: "Enter", cb: addMessage }}
			class="text-md min-w-[250px] rounded-md border border-black px-2 py-1" />
	</div>
</DemoContainer>
