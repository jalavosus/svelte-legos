<script lang="ts">
	import { activeElementStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import Text from "$lib/shared/components/Text.svelte";

	const activeElement = activeElementStore();

	let id = $state($activeElement?.id || "null");
</script>

<DemoContainer>
	<Text>Select the inputs below to see the changes</Text>
	<div class="my-4 flex flex-col space-y-2">
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each Array(4).fill(0) as el, index}
			<div>
				<input
					placeholder={`Input with id ${"input-" + (index + 1)}`}
					class="rounded-md border border-slate-500 px-2 py-1 text-sm"
					id={"input-" + (index + 1)} />
			</div>
		{/each}
	</div>

	<Text>
		Current active element id: <span>{id}</span>
	</Text>
</DemoContainer>
