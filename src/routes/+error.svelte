<script lang="ts">
	import { page } from "$app/state";

	let errorCode = $derived(page.status);
	let errorMessage = $derived(page.error?.message ?? "something went wrong");
</script>

<section class="py:20 container mx-auto p-8 lg:py-36">
	<div>
		<div class="max-w-xl space-y-4">
			<h1 class="text-second text-4xl font-bold tracking-wider uppercase lg:text-7xl">
				Svelte <b class="text-prime">Legos</b>
			</h1>
			<h3 class="text-text text-xl font-light lg:text-3xl">{errorCode} - {errorMessage}</h3>
		</div>
		<div class="mt-6 lg:mt-12">
			<a
				href="/"
				class="bg-prime inline-block rounded-lg px-4 py-2 text-sm text-white hover:underline lg:px-6 lg:py-3 lg:text-base">
				Go Home
			</a>
		</div>
	</div>
</section>
