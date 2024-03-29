<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import CodeSnippet from '$lib/components/CodeSnippet.svelte';
	import { readable, type Readable } from 'svelte/store';

	const cursorCoordinates = createCursorCoordinateStore();

	function createCursorCoordinateStore(): Readable<{ x: number; y: number }> {
		const store = readable({ x: 0, y: 0 }, (set) => {
			const onMouseMove = (evt: MouseEvent) => {
				set({ x: evt.clientX, y: evt.clientY });
			};

			document.addEventListener('mousemove', onMouseMove);

			return () => {
				removeEventListener('mousemove', onMouseMove);
			};
		});

		return store;
	}
</script>

<Card>
	<svelte:fragment slot="header">
		<h3 class="font-mono text-lg">Custom Cursor Position Writeable</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<p>
			We can make a custom Svelte store to track the client cursor position. To track the client
			cursor position, we only need an event listener that is added only once - we do not want other
			components to be able to set the store value, only subscribe. This is a good chance to use a
			<CodeSnippet>
				<svelte:fragment slot="code">readable()</svelte:fragment>
			</CodeSnippet>.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="additional-content">
		<div class="font-mono text-sm">
			{$cursorCoordinates.x}, {$cursorCoordinates.y}
		</div>
	</svelte:fragment>
</Card>
