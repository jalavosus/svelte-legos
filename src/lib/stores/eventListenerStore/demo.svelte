<script lang="ts">
	import { eventListenerStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";
	import { onMount } from "svelte";

	let buttonRef: HTMLButtonElement;
	let documentRef: Document;

	const onScroll = (event: Event) => {
		console.log("window scrolled!", event);
	};

	const onClick = (event: Event) => {
		console.log("button clicked!", event);
	};

	const onVisibilityChange = (event: Event) => {
		console.log("doc visibility changed!", {
			isVisible: !document.hidden,
			event
		});
	};

	onMount(() => {
		// example with window based event
		eventListenerStore("scroll", onScroll);

		// example with document based event
		eventListenerStore("visibilitychange", onVisibilityChange, documentRef);

		eventListenerStore("click", onClick, buttonRef);
	});
</script>

<DemoContainer>
	<p class="mb-4">Check console for logs.</p>
	<button class={PrimaryButtonClassName} bind:this={buttonRef}>Click me</button>
</DemoContainer>
