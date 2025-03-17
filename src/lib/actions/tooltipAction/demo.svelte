<script lang="ts">
	import { tooltipAction } from "$lib";
	import type { Placement } from "./index";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	const variants = [
		{ placement: "left" as Placement, label: "Top-Left" },
		{ placement: "center" as Placement, label: "Center" },
		{ placement: "right" as Placement, label: "Right" }
	];
</script>

<DemoContainer>
	<div class="flex flex-col space-y-10 space-x-8">
		<div class="flex flex-row space-x-12">
			{#each variants as v, idx (idx)}
				<button
					class="rounded-md border border-slate-600 bg-white px-5 py-2 dark:bg-black"
					use:tooltipAction={{
						content: `Tooltip Content - ${v.placement}`,
						placement: v.placement
					}}>
					{v.label}
				</button>
			{/each}
		</div>
		<div>
			<button
				class="basis-1/3 rounded-md border border-slate-600 bg-white px-5 py-2 dark:bg-black"
				use:tooltipAction={{
					content: "Tooltip Content - Left",
					placement: "left",
					pointer: false
				}}>
				Left, No Tail/Pointer
			</button>
		</div>
	</div>
</DemoContainer>
