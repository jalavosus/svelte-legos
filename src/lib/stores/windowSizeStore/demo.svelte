<script lang="ts">
	import { windowSizeStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";

	const size = windowSizeStore();
</script>

<DemoContainer>
	<div>
		{$size.width} X {$size.height}
	</div>
	<br />
	<div>
		Try resizing the window
		<p>
			<span class="font-mono">(Cmd with (-/+))</span>
		</p>
	</div>
</DemoContainer>
