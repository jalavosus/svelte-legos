<script lang="ts">
	import { rafFnStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";

	let counter = $state(0);

	function handler() {
		counter += 1;
	}

	const { pause, resume } = rafFnStore(handler);
</script>

<DemoContainer>
	<div class="mb-4">
		{counter}
	</div>
	<div class="space-x-4">
		<PrimaryButton onclick={pause}>Pause</PrimaryButton>
		<PrimaryButton onclick={resume}>Resume</PrimaryButton>
	</div>
</DemoContainer>
