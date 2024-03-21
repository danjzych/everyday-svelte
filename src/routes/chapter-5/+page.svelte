<script lang="ts">
	import Card from '../Card.svelte';
	import JsonTree from './JSONTree.svelte';
	import sampleJson from './sample.json';
</script>

<Card>
	<svelte:fragment slot="header">
		<h3 class="font-mono text-lg">Dynamic Content Through Slots</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<p>
			You can use slots and svelte:fragments to dyanamically render content within a component.
			Here, we have a Card component that takes 'header' and 'content' slots
		</p>
		<p>
			You can give slots default values as well. In the card below, you can see our Card component
			rendered with its default values - no svelte:fragments used.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="additional-content">
		<div
			class="my-4 w-3/4 rounded-xl border border-purple-300 bg-purple-100 p-2 text-center text-sm font-extralight shadow-sm"
		>
			<p>
				We also have an 'optional' slot for additional content. If not is passed to this slot, we
				don't render a default, as seen below.
			</p>
		</div>
	</svelte:fragment>
</Card>

<Card />

<Card>
	<svelte:fragment slot="header">
		<h3 class="font-mono text-lg">Recursive JSON Tree Viewer!</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<p>
			One awesome feature is <em>svelte:self</em> - this allows you to recursively build components with
			themselves.
		</p>
		<p>
			Our JSONTree component has a prop for <em>data</em>, which takes an iterative and iterates
			over it. When we encounter an interative data structure within said data, we recursively call
			our component with svelte:fragment.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="additional-content">
		<div class="self-start">
			<h4 class="text-semibold font-mono">JSON DATA:</h4>
			<JsonTree data={sampleJson} />
		</div>
	</svelte:fragment>
</Card>
