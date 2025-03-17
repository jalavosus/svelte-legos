<script lang="ts">
	import { fetchWithTimeoutAndRetry } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";

	let messages: string[] = $state([]);
	let timeout = $state(100);
	let retryCount = $state(3);

	function handleRetry() {
		messages = messages.concat(["Retrying..."]);
	}

	function handleSendRequest() {
		fetchWithTimeoutAndRetry("https://dog.ceo/api/breeds/image/random", {
			retryCount,
			timeout,
			onRetry: handleRetry
		})
			.then(() => {
				messages = messages.concat("Request Successfull");
			})
			.catch((e) => {
				messages = messages.concat([e.message]);
			});
	}
</script>

<DemoContainer>
	<p class="mb-4">Play with timeout value and you will see the retry behavior</p>
	<div class="my-8">
		<div class="flex items-center space-x-2">
			<label for="retry">Retry Count:</label>
			<input type="range" bind:value={retryCount} min={3} step={1} max={10} />
			<span>{retryCount}</span>
		</div>
		<div class="mt-4 flex items-center space-x-2">
			<label for="timeout">Timeout:</label>
			<input type="range" bind:value={timeout} min={100} step={10} max={1000} />
			<span>{timeout}ms</span>
		</div>
	</div>
	<div class="mt-4">
		<PrimaryButton onclick={handleSendRequest}>Send Request</PrimaryButton>
	</div>
	<div class="mt-4 space-y-2">
		{#each messages as message, idx (idx)}
			<div>{message}</div>
		{/each}
	</div>
</DemoContainer>
