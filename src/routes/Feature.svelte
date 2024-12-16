<script lang="ts">
export let icon: string;
export let title: string;
export let description: string;
</script>

<div class="text-second dark:text-white rounded-lg bg-white dark:bg-slate-600 p-4 lg:p-6 border border-slate-200">
	<div class="flex flex-row space-x-4">
		<p class="text-2xl lg:text-3xl mb-2">{icon}</p>
		<h2 class="text-xl font-bold lg:text-3xl">{title}</h2>
	</div>
	<p class="lg:mt-4">{description}</p>
</div>
