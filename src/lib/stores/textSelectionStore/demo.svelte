<script lang="ts">
	import { textSelectionStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	const selectionStore = textSelectionStore();

	let text = $derived($selectionStore.text),
		rects = $derived($selectionStore.rects),
		selectedStyle = $derived($selectionStore.text ? "text-primary" : "text-gray-400");
</script>

<DemoContainer>
	<div>
		<p class="font-600 text-blue-600">You can select any text on the page.</p>
		<p>
			<strong class="font-bold">Selected Text:</strong>
			<em class="block h-44 overflow-y-auto whitespace-pre {selectedStyle}"
				>{#if text}
					{text}
				{:else}
					No selected
				{/if}</em>
		</p>
		<div>
			<strong>Selected rects:</strong>
			<pre class="h-72" lang="json">{JSON.stringify(rects, null, 2)}</pre>
		</div>
	</div>
</DemoContainer>
