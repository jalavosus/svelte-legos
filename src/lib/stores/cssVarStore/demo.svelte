<script lang="ts">
	import { cssVarStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	const bgColor = cssVarStore("--bg", { initialValue: "white" });
</script>

<DemoContainer>
	<div class="mb-4">
		<div class="mb-2">Color Value for <span class="font-mono">--bg</span></div>
		<input bind:value={$bgColor} class="text-md rounded-md border border-black px-3 py-2" />
	</div>
	<div
		class="flex h-20 w-60 items-center justify-center rounded-md p-4 text-sm"
		style:background="var(--bg)">
		<span class="font-mon">background: var(--bg)</span>
	</div>
</DemoContainer>
