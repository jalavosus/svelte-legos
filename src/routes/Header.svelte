<script>
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

	import IconLink from "$lib/components/IconLink.svelte";
</script>

<section
	class="bg-primary-superdark fixed top-0 z-10 h-16 w-screen border-b border-black px-8 dark:bg-gray-900">
	<nav class="container m-auto flex h-16 flex-row items-center justify-between">
		<a href="/" class="flex items-center space-x-2">
			<span class="text-xl font-bold text-gray-50"
				>svelte-<span class="text-prime">legos (blue)</span></span>
		</a>
		<div class="mt-4 flex flex-row space-y-4 space-x-8 text-white lg:space-x-10">
			<a class="" href="/guides">Guides</a>
			<a class="" href="/about">About</a>
			<IconLink href="https://github.com/jalavosus/svelte-legos" icon={faGithub} size="xl" />
			<IconLink href="/search" icon={faMagnifyingGlass} size="xl" />
		</div>
	</nav>
</section>
