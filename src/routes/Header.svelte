<script>
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

	 import IconLink from "$lib/components/IconLink.svelte";
</script>

<section
	class="fixed top-0 z-10 h-16 w-screen border-b border-black px-8 bg-primary-superdark dark:bg-gray-900"
>
	<nav class="container m-auto flex flex-row h-16 items-center justify-between">
		<a href="/" class="flex items-center space-x-2">
			<span class="text-xl font-bold text-gray-50"
			>svelte-<span class="text-prime">legos (blue)</span></span>
		</a>
		<div class="flex flex-row space-x-8 lg:space-x-10 space-y-4 text-white mt-4">
			<a class="" href="/guides">Guides</a>
			<a class="" href="/about">About</a>
			<IconLink href="https://github.com/jalavosus/svelte-legos" icon={faGithub} size="xl" />
			<IconLink href="/search" icon={faMagnifyingGlass} size="xl" />
		</div>
	</nav>
</section>
