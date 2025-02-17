<script lang="ts">
	import { sortableTableAction } from "$lib";
	import DemoContainer from "$lib/shared/components/DemoContainer.svelte";
</script>

<DemoContainer>
	<p class="mb-4 p-2">Try clicking on the columns to sort the rows</p>
	<table use:sortableTableAction class="w-full table-auto">
		<thead>
			<tr>
				<th class="p-2 text-left">Column 1</th>
				<th class="p-2 text-left">Column 2</th>
				<th class="p-2 text-left">Column 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="p-2">Row 1</td>
				<td class="p-2">Row 1</td>
				<td class="p-2">Row 1</td>
			</tr>
			<tr>
				<td class="p-2">Row 2</td>
				<td class="p-2">Row 2</td>
				<td class="p-2">Row 2</td>
			</tr>
			<tr>
				<td class="p-2">Row 3</td>
				<td class="p-2">Row 3</td>
				<td class="p-2">Row 3</td>
			</tr>
		</tbody>
	</table>
</DemoContainer>
