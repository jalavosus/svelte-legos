<script lang="ts">
	import { eyeDropperAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { PrimaryButtonClassName } from "$lib/shared/tailwind";

	let color = "";
</script>

<DemoContainer>
	<button
		class={PrimaryButtonClassName}
		use:eyeDropperAction={{
			onDone: (value) => (color = value),
			onError: console.log
		}}>
		Open EyeDropper
	</button>

	<div
		class="mt-4 flex h-20 w-60 items-center justify-center rounded-md bg-slate-400 p-4 text-sm"
		style:background={color}>
		Color will appear here.
	</div>
</DemoContainer>
