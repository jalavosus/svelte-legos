<script lang="ts">
	import { first } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { writable } from "svelte/store";

	const data = writable([
		{
			name: "Svelte",
			author: "Rich",
			createdAt: Date.now()
		},
		{
			name: "Vue",
			author: "Evan",
			createdAt: Date.now()
		}
	]);

	const firstElement = first(data);
</script>

<DemoContainer>
	<div>
		<div>
			Store data:
			<pre class="mt-2 text-sm">
	{JSON.stringify($data, null, 2)}
					</pre>
		</div>

		<div>
			First item:
			<pre class="mt-2 text-sm">
	{JSON.stringify($firstElement, null, 2)}
					</pre>
		</div>
	</div>
</DemoContainer>
