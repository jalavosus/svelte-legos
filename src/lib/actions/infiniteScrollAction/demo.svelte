<script lang="ts">
	import { infiniteScrollAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import LoadingDots from "$lib/shared/components/LoadingDots.svelte";

	function createMessages(startFrom: number) {
		return Array(10)
			.fill(0)
			.map((_, i) => `Message: #${startFrom + i + 1}`);
	}

	let page = $state(0);
	const _page = () => page;
	let messages: string[] = $state(createMessages(_page()));
	let isLoading = $state(false);
	let delay = $state(200);
	let distance = $state(0);
	let immediate = $state(true);
	let disabled = $state(false);

	function loadMessages() {
		if (isLoading) return;
		isLoading = true;
		setTimeout(() => {
			page = page + 1;
			messages = messages.concat(createMessages(page * 10));
			isLoading = false;
		}, 3000);
	}
</script>

<DemoContainer>
	<p class="mb-4">
		Play with these options and try hitting the bottom of the container to load new messages!
	</p>
	<div class="my-8">
		<div class="flex items-center space-x-2">
			<label for="delay">Delay:</label>
			<input type="range" bind:value={delay} min={100} step={100} max={1000} />
			<span>{delay}ms</span>
		</div>
		<div class="mt-4 flex items-center space-x-2">
			<label for="distance">Distance:</label>
			<input type="range" bind:value={distance} min={0} step={1} max={100} />
			<span>{distance}px</span>
		</div>
		<div class="mt-4 flex items-center space-x-2">
			<label for="immediate">Immediate?:</label>
			<input id="immediate" type="checkbox" bind:checked={immediate} />
		</div>
		<div class="mt-4 flex items-center space-x-2">
			<label for="disabled">Disabled?:</label>
			<input id="disabled" type="checkbox" bind:checked={disabled} />
		</div>
	</div>

	<div
		class="flex h-60 flex-col items-start space-y-4 overflow-auto rounded-md bg-slate-200 p-4 dark:bg-slate-700"
		use:infiniteScrollAction={{
			delay,
			distance,
			immediate,
			disabled,
			cb: loadMessages
		}}>
		{#each messages as message, idx (idx)}
			<div class="bg-prime rounded-md px-3 py-2 text-sm text-white">{message}</div>
		{/each}
		{#if isLoading}
			<div class="rounded-md bg-slate-400 px-3 py-2 text-sm text-white">
				Loading <LoadingDots />
			</div>
		{/if}
	</div>
</DemoContainer>
