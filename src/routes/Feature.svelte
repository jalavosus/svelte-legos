<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="text-second rounded-lg border border-slate-200 bg-white p-4 lg:p-6 dark:bg-slate-600 dark:text-white">
	<div class="flex flex-row space-x-4">
		<p class="mb-2 text-2xl lg:text-3xl">{icon}</p>
		<h2 class="text-xl font-bold lg:text-3xl">{title}</h2>
	</div>
	<p class="lg:mt-4">{description}</p>
</div>
