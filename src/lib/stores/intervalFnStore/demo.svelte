<script lang="ts">
	import { writable } from "svelte/store";
	import { intervalFnStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";
	const greetings = [
		"Hello",
		"Hi",
		"Yo!",
		"Hey",
		"Hola",
		"こんにちは",
		"Bonjour",
		"Salut!",
		"你好",
		"Привет"
	];
	let word = "Hello";
	let interval = writable(500);

	const { pause, resume, isActive } = intervalFnStore(handler, interval);

	function handler() {
		word = greetings[Math.floor(Math.random() * greetings.length)];
	}
</script>

<DemoContainer>
	<div class="mb-4">
		<p class="text-xl">{word}</p>
	</div>
	<div class="mb-4">
		<p class="mb-2">Interval:</p>
		<p>
			<input class="rounded-md p-2" bind:value={$interval} type="number" placeholder="interval" />
		</p>
	</div>
	<div>
		{#if $isActive}
			<PrimaryButton onclick={pause}>Pause</PrimaryButton>
		{:else}
			<PrimaryButton onclick={resume}>Resume</PrimaryButton>
		{/if}
	</div>
</DemoContainer>
