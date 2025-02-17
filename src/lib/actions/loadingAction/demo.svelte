<script>
	import { loadingAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	let loading = $state(false);
</script>

<DemoContainer>
	<div class="mb-4">
		<label for="loading">Is Loading?</label>
		<input id="loading" type="checkbox" bind:checked={loading} />
	</div>
	<div
		class="bg-prime flex h-20 w-full items-center justify-center rounded-md text-white"
		use:loadingAction={loading}>
		Content
	</div>
</DemoContainer>
