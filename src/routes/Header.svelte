<script>
	import GithubIcon from "./GithubIcon.svelte";
	import SearchIcon from "./SearchIcon.svelte";
</script>

<section
	class="fixed top-0 z-10 h-16 w-screen border-b border-black bg-white px-8 dark:bg-gray-900">
	<nav class="container m-auto flex h-full items-center justify-between">
		<a href="/" class="flex items-center space-x-2">
			<span class="text-xl font-bold dark:text-gray-50"
				>svelte-<span class="text-prime">legos (blue)</span></span>
		</a>
		<ul class="flex space-x-8 lg:space-x-10 dark:text-white">
			<li>
				<a class="font-extralight" href="/guides">Guides</a>
			</li>
			<li>
				<a class="font-extralight" href="/about">About</a>
			</li>
			<li>
				<a
					class="block h-6 w-6 font-extralight"
					href="https://github.com/jalavosus/svelte-legos"
					target="_blank"
					aria-label="Github"
					rel="noreferrer">
					<GithubIcon className="fill-[currentColor]" />
				</a>
			</li>
			<li>
				<a href="/search" aria-label="Search">
					<SearchIcon class="h-6 w-6" />
				</a>
			</li>
		</ul>
	</nav>
</section>
