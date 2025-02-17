<script lang="ts">
	import { documentVisibilityStore, timeoutFnStore } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import Text from "$lib/shared/components/Text.svelte";

	const visibility = documentVisibilityStore();
	const startMessage = "💡 Minimize the page or switch tab then return";
	const welcomeMessage = "🎉 Welcome back!";

	const { start } = timeoutFnStore(() => {
		message = startMessage;
	}, 3000);

	let message = $state(startMessage);

	$effect(() => {
		if ($visibility === "visible") {
			start();
		} else {
			message = welcomeMessage;
		}
	});
</script>

<DemoContainer>
	<Text>
		{message}
	</Text>
</DemoContainer>
