<script lang="ts">
	import ChapterLayout from '$lib/components/ChapterLayout.svelte';
</script>

<ChapterLayout>
	<svelte:fragment slot="title">
		<div>
			<h2 class="text-center font-mono text-xl">Timers</h2>
			<h3 class="text-center font-mono">
				Debounce, Throttling, recursive timers, requestAnimationFrame
			</h3>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="page">
		<slot />
	</svelte:fragment>
</ChapterLayout>
