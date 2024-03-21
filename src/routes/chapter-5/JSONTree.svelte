<script lang="ts">
	export let data: {}; //any data shape is okay for our JSON here.
</script>

<ul class="list-inside list-disc pl-8">
	{#each Object.entries(data) as [key, value]}
		<li>
			{#if !Number(key) && Number(key) !== 0}
				<span class="bg-purple-100 px-1 font-mono">
					{key}:
				</span>
			{/if}

			{#if typeof value === 'object'}
				<svelte:self data={value} />
			{:else}
				<span class="font-light">
					{value}
				</span>
			{/if}
		</li>
	{/each}
</ul>
