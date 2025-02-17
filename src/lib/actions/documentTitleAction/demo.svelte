<script lang="ts">
	import { documentTitleAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
</script>

<DemoContainer>
	<input
		placeholder="Enter title here."
		use:documentTitleAction
		class="text-md rounded-md border border-black px-3 py-2" />
</DemoContainer>
