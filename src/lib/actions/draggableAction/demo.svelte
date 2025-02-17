<script lang="ts">
	import { draggableAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
</script>

<DemoContainer>
	<div
		class="bg-prime flex h-20 w-20 items-center justify-center rounded-lg text-sm text-white"
		use:draggableAction>
		Drag me
	</div>
</DemoContainer>
