<script lang="ts">
	import { scrollStore } from "$lib";
	import BooleanDisplay from "$lib/shared/components/BooleanDisplay.svelte";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { InputClass } from "$lib/shared/tailwind";

	let el: HTMLElement | null = $state(null);
	let smooth = $state(false);

	// Format the numbers with toFixed() to make them
	// nicer to display
	// const displayX = computed({
	// 	get() {
	// 		return x.value.toFixed(1);
	// 	},
	// 	set(val) {
	// 		x.value = Number.parseFloat(val);
	// 	},
	// });
	// const displayY = computed({
	// 	get() {
	// 		return y.value.toFixed(1);
	// 	},
	// 	set(val) {
	// 		y.value = Number.parseFloat(val);
	// 	},
	// });

	let behavior: ScrollBehavior = $derived(smooth ? "smooth" : "auto"),
		myScrollStore = $derived(el !== null ? scrollStore(el, { behavior }) : null);

	let displayX = $derived($myScrollStore?.x),
		displayY = $derived($myScrollStore?.y),
		isScrolling = $derived($myScrollStore?.isScrolling),
		arrivedState = $derived($myScrollStore?.arrivedState),
		directions = $derived($myScrollStore?.directions),
		left = $derived(arrivedState?.left || false),
		right = $derived(arrivedState?.right || false),
		bottom = $derived(arrivedState?.bottom || false),
		top = $derived(arrivedState?.top || false),
		toLeft = $derived(directions?.left || false),
		toRight = $derived(directions?.right || false),
		toTop = $derived(directions?.bottom || false),
		toBottom = $derived(directions?.top || false);
</script>

<DemoContainer>
	<div class="flex">
		<div bind:this={el} class="m-auto h-[300px] w-[300px] overflow-scroll rounded-sm bg-gray-500/5">
			<div class="relative h-[400px] w-[500px]">
				<div class="gray-500/5 x-2 y-1 absolute top-0 left-0">TopLeft</div>
				<div class="gray-500/5 x-2 y-1 absolute bottom-0 left-0">BottomLeft</div>
				<div class="gray-500/5 x-2 y-1 absolute top-0 right-0">TopRight</div>
				<div class="gray-500/5 x-2 y-1 absolute right-0 bottom-0">BottomRight</div>
				<div class="gray-500/5 x-2 y-1 absolute top-1/3 left-1/3">Scroll Me</div>
			</div>
		</div>
		<div class="m-auto w-[280px] pl-4">
			<div class="grid grid-cols-[120px_auto] gap-2 rounded-sm bg-gray-500/5 px-6 py-4">
				<span class="right py-4 opacity-75">X Position</span>
				<div class="text-primary">
					<div>
						<input
							class={InputClass}
							bind:value={$displayX}
							type="number"
							min="0"
							max="200"
							step="10" />
					</div>
				</div>
				<span class="right py-4 opacity-75">Y Position</span>
				<div class="text-primary">
					<div>
						<input
							class={InputClass}
							bind:value={$displayY}
							type="number"
							min="0"
							max="100"
							step="10" />
					</div>
				</div>
				<label for="smooth-scrolling-option" class="right opacity-75">Smooth scrolling</label>
				<span><input id="smooth-scrolling-option" bind:value={smooth} type="checkbox" /></span>
				<span class="right opacity-75">isScrolling</span>
				<BooleanDisplay value={$isScrolling ?? false} />
				<div class="right opacity-75">Top Arrived</div>
				<BooleanDisplay value={top} />
				<div class="right opacity-75">Right Arrived</div>
				<BooleanDisplay value={right} />
				<div class="right opacity-75">Bottom Arrived</div>
				<BooleanDisplay value={bottom} />
				<div class="right opacity-75">Left Arrived</div>
				<BooleanDisplay value={left} />
				<div class="right opacity-75">Scrolling Up</div>
				<BooleanDisplay value={toTop} />
				<div class="right opacity-75">Scrolling Right</div>
				<BooleanDisplay value={toRight} />
				<div class="right opacity-75">Scrolling Down</div>
				<BooleanDisplay value={toBottom} />
				<div class="right opacity-75">Scrolling Left</div>
				<BooleanDisplay value={toLeft} />
			</div>
		</div>
	</div>
</DemoContainer>
