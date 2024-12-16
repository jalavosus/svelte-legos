<script lang="ts">
	import FAQItem from "./FAQItem.svelte";
</script>

<section class="container mx-auto p-8">
	<div class="max-w-xl space-y-4">
		<h2 class="text-2xl lg:text-5xl tracking-wider font-bold text-second">
			About/FAQs
		</h2>
	</div>

	<div class="py-20">
		<ul class="space-y-10">
			<FAQItem>
				{#snippet question()}
					<p class="text-2xl dark:text-gray-50">Why <span class="text-prime">blue</span>?</p>
				{/snippet}
				{#snippet answer()}
					<p class="text-lg dark:text-gray-50">
						I chose <span class="text-prime">blue</span> as I both love the colour blue,
						and because it's a lovely compliment to the original colour theme used by <a href="https://github.com/ankurrsinghal/svelte-legos" class="text-oldprime">ankurrsingal/svelte-legos</a>.
					</p>
				{/snippet}
			</FAQItem>
			<FAQItem
				question="But really, why sveltelegos-blue?"
			>
				{#snippet answer()}
					<div class="text-lg whitespace-pre-line dark:text-gray-50">
						<a href="https://github.com/ankurrsinghal/svelte-legos" class="text-oldprime">ankurrsingal/svelte-legos</a> doesn't have consistent maintenance/updates.
						That is <i class="font-bold">NOT</i> something to knock the original author for. OSS project maintainers don't owe us anything, and I am beyond grateful for the time they put in to building this project.
						That being said, this is a library which should have more regular maintenance and releases. So, I forked it.
					</div>
				{/snippet}
			</FAQItem>
			<FAQItem
				question="So, is this a drop-in replacement for the original library?"
				answer="It sure is! This fork may have new features added in the future, but (for now...) this is API-compatible with the original library."
			/>
			<FAQItem
				question="Are you a turtle?"
				answer=":)"
			/>
		</ul>
	</div>
</section>