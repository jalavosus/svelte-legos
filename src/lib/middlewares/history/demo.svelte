<script lang="ts">
	import { history } from "$lib/middlewares";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";
	import { writable } from "svelte/store";

	const counter = history(writable(0));
	const { undo, redo, canRedo, canUndo } = counter.history;
</script>

<DemoContainer>
	<div>
		<div>
			<PrimaryButton disabled={!$canUndo} onclick={undo}>Undo</PrimaryButton>
			<PrimaryButton disabled={!$canRedo} onclick={redo}>Redo</PrimaryButton>
		</div>
		<div class="my-8 text-4xl">
			{$counter}
		</div>
		<div>
			<PrimaryButton onclick={() => $counter++}>Increment</PrimaryButton>
		</div>
	</div>
</DemoContainer>
