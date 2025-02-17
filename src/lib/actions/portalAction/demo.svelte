<script lang="ts">
	import { portalAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let target = $state("body");
	let showPortal = $state(false);
</script>

<div id="container" class="relative">
	<DemoContainer>
		<div class="py-4">
			<div class="mb-4">
				<label class="mr-2">
					<input type="radio" name="type" value="body" bind:group={target} />
					Portal to body (default)
				</label>
				<label class="mr-2">
					<input type="radio" name="type" value="#container" bind:group={target} />
					Portal to this container
				</label>
			</div>
			<button class={PrimaryButtonClassName} onclick={() => (showPortal = true)}>
				Show portal content
			</button>
		</div>
	</DemoContainer>
</div>
{#if showPortal}
	<div
		use:portalAction={target}
		class="bg-opacity-50 inset-0 grid place-content-center bg-black p-4"
		class:fixed={target === "body"}
		class:absolute={target === "#container"}>
		<div class="rounded-sm bg-white p-4 text-center">
			<p class="mb-4">This element will render as a direct child of "{target}"</p>
			<button class={PrimaryButtonClassName} onclick={() => (showPortal = false)}>
				Close portal content
			</button>
		</div>
	</div>
{/if}
