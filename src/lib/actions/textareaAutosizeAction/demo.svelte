<script lang="ts">
	import { textareaAutosizeAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
</script>

<DemoContainer>
	<textarea
		placeholder="Auto resize textarea."
		class="focus-visible:border-prime focus:border-prime focus-within:border-prime min-w-[250px] rounded-md border border-slate-400 p-4"
		use:textareaAutosizeAction></textarea>
</DemoContainer>
