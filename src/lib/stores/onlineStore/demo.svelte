<script lang="ts">
	import { onlineStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	const isOnline = onlineStore();
</script>

<DemoContainer>
	<p class="mb-4">
		Try switching to offline using Network tab in Devtools or turning off your Wifi.
	</p>
	<div class="inline-block rounded-md bg-white px-4 py-2">
		Is Online: <span class={$isOnline ? "text-green-600" : "text-prime"}>{$isOnline}</span>
	</div>
</DemoContainer>
