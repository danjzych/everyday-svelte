<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import CodeSnippet from '$lib/components/CodeSnippet.svelte';
	import longPress from './longPress';
</script>

<Card>
	<svelte:fragment slot="header">
		<h3 class="font-mono text-lg">Drag and Drop with Actions</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<p>
			Actions are a lightweight alternative to components that allow you to encapsulate logic and
			data into a reusable unit. They can be complicated, but in their most simple form, an action
			is a function that takes a DOM node as an argument, and returns a destroy method.
		</p>
		<p>
			Below, we use an action called
			<CodeSnippet>
				<svelte:fragment slot="code">longPress</svelte:fragment>
			</CodeSnippet>
			that adds event listeners for mouseup and mousedown to get the length of a press. The action takes
			a duration argument, and dispatches a custom longpress event after said duration. We can then listen
			for the 'longpress' event, and do whatever we would like. We can hook into this action to invoke
			a function after a given duration. This button uses a simple window alert after 2 seconds to illustrate.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="additional-content">
		<button
			class="rounded-xl border border-purple-950 bg-purple-100 p-1 shadow-md hover:opacity-65 active:shadow-none"
			use:longPress={2000}
			on:longpress={() => window.alert('you pressed a long time!')}
		>
			Press me for 2 seconds
		</button>
	</svelte:fragment>
</Card>
