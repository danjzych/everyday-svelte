<script lang="ts">
	import StringValue from './StringValue.svelte';
	import NumberValue from './NumberValue.svelte';
	import JsonValue from './JSONValue.svelte';

	export let data: {}; //any data shape is okay for our JSON here.

	function getComponentType(type: any): ConstructorOfATypedSvelteComponent {
		if (type === 'string') return StringValue;
		if (type === 'number') return NumberValue;
		return JsonValue;
	}
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
				<svelte:component this={getComponentType(typeof value)} {value} />
			{/if}
		</li>
	{/each}
</ul>
