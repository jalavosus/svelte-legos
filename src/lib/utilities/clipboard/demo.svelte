<script lang="ts">
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
	import { clipboard, hasPermission } from "$lib";
	import PrimaryButton from "$lib/shared/components/PrimaryButton.svelte";
	import { InputClass } from "$lib/shared/tailwind";

	let value = $state("");
	const board = clipboard({ read: true });
	const permissionRead = hasPermission("clipboard-read");
	const permissionWrite = hasPermission("clipboard-write");

	let isSupported = $derived($board.isSupported);
	let copy = $derived($board.copy);
	let copiedText = $derived($board.text);
	let copied = $derived($board.copied);
</script>

<DemoContainer>
	<div>
		{#if isSupported}
			<div class="space-y-2">
				<note>
					Clipboard Permission: read <b>{$permissionRead}</b> | write
					<b>{$permissionWrite}</b>
				</note>
				<p>
					Current copied: <code>{copiedText || "none"}</code>
				</p>
				<input class={InputClass} bind:value type="text" />
				<PrimaryButton onclick={() => copy(value)}>
					<!-- by default, `copied` will be reset in 1.5s -->
					{#if !copied}
						<span>Copy</span>
					{:else}
						<span>Copied!</span>
					{/if}
				</PrimaryButton>
			</div>
		{:else}
			<p>Your browser does not support Clipboard API</p>
		{/if}
	</div>
</DemoContainer>
