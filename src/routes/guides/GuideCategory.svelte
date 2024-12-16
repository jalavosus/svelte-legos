<script lang="ts">
	import { page } from "$app/state";
	import type { GuideCategoryProps } from "./guide";
	import ChevronButton from "./ChevronButton.svelte";

	let { label, path, guides }: GuideCategoryProps = $props();

	let basePath = $derived(`/guides/${path}`);
	const makePath = (p: string): string => `${basePath}/${p}`

	const isActive = (p: string): boolean => p === page.data.hookName

	let isOpen = $state(false);

	const setOpen = () => isOpen = !isOpen;
</script>

<li class="py-2"></li>
<li class="w-4/5">
	<button class="w-full flex flex-row justify-between" onclick={setOpen}>
		<span class="text-md capitalize">{label}</span>
		<ChevronButton rotate={isOpen ? "down" : undefined} />
	</button>

	<div class="grow border-t border-gray-400"></div>
</li>

{#if isOpen}
{#each guides as guide}
	<li>
		<a
			href={makePath(guide)}
			class="hover:underline {isActive(guide) ? 'font-bold underline' : ''}">{guide}</a
		>
	</li>
{/each}
{/if}

