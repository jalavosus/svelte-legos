<script>
	import GithubIcon from "./GithubIcon.svelte";
	import SearchIcon from "./SearchIcon.svelte";
</script>

<section class="border-b border-black fixed top-0 h-16 w-screen z-10 bg-white px-8">
	<nav class="container flex items-center justify-between h-full m-auto">
		<a href="/" class="flex items-center space-x-2">
			<span class="text-xl font-bold">svelte-<span class="text-prime">legos (blue)</span></span>
		</a>
		<ul class="flex space-x-8 lg:space-x-10">
			<li>
				<a class="font-extralight" href="/guides">Guides</a>
			</li>
			<li>
				<a class="font-extralight" href="/about">About</a>
			</li>
			<li>
				<a
					class="font-extralight w-6 h-6 block"
					href="https://github.com/jalavosus/svelte-legos"
					target="_blank"
					aria-label="Github"
					rel="noreferrer"
				>
					<GithubIcon className="fill-[currentColor]" />
				</a>
			</li>
			<li>
				<a href="/search" aria-label="Search">
					<SearchIcon class="w-6 h-6" />
				</a>
			</li>
		</ul>
	</nav>
</section>
