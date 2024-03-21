<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<svelte:fragment slot="header">
		<h3 class="font-mono text-lg">Something about actoins</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">contenttt</svelte:fragment>
</Card>
