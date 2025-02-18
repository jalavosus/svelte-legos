<script lang="ts">
	import type { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	
	import faSize from "$lib/helpers/faSize";

	type Props = {
		href: string;
		label?: string;
		size?: SizeProp
		icon: IconDefinition;
	};

	let { href, icon, label, size="1x" }: Props = $props();
	
	let className: string = $derived.by(() => {
		const _size = faSize(size);
		if (_size > faSize("lg")) {
			return `-mt-${_size-1}`;
		}
		
		return "";
	})
</script>

<a class="flex flex-row space-x-2 hover:opacity-60" {href} target="_blank">
	<FontAwesomeIcon {icon} {size} class={className} />
	{#if label}
		<span class="-mt-1">{label}</span>
	{/if}
</a>
