<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { PrimaryButtonClassName } from "../tailwind";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type
	interface $$Props extends HTMLButtonAttributes {}
</script>

<button {...$$props} on:click class={PrimaryButtonClassName}>
	<slot />
</button>
