<script lang="ts">
	import ChapterLayout from '$lib/components/ChapterLayout.svelte';
</script>

<ChapterLayout>
	<svelte:fragment slot="title">
		<h2 class="text-center font-mono text-xl">Chapter 5 - Component Composition</h2>
	</svelte:fragment>
	<svelte:fragment slot="page">
		<slot />
	</svelte:fragment>
</ChapterLayout>
