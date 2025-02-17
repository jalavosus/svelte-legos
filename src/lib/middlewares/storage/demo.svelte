<script lang="ts">
	import { storage } from "$lib/middlewares";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { writable } from "svelte/store";

	const name = storage(writable(""), "name");
</script>

<DemoContainer>
	<div>
		<div>
			<label for="name" class="mr-4">Name:</label>
			<input bind:value={$name} class="text-md rounded-md border border-black px-3 py-2" />
		</div>

		<p class="mt-4 text-sm">
			Check your local storage, on changing name value, name key should update!
		</p>
	</div>
</DemoContainer>
