<script lang="ts">
	import { fullScreenAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let ref;
</script>

<DemoContainer>
	<div class="text-center">
		<div class="flex py-4">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				bind:this={ref}
				class="m-auto rounded-md"
				src="https://cdn.coverr.co/videos/coverr--07-022-22-gardening_0037-7179/1080p.mp4"
				width="600"
				controls>
			</video>
		</div>
		<div class="space-x-4">
			<button class={PrimaryButtonClassName} use:fullScreenAction={ref}> Fullscreen Video </button>
			<button class={PrimaryButtonClassName} use:fullScreenAction> Fullscreen Window </button>
		</div>
	</div>
</DemoContainer>
