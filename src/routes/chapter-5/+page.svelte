<script lang="ts">
	import Card from '../Card.svelte';
	import JsonTree from './JSONTree.svelte';
	import CodeSnippet from '$lib/components/CodeSnippet.svelte';

	import sampleJson from './sample.json';
</script>

<Card>
	<svelte:fragment slot="header">
		<h3 class="font-mono text-lg">Dynamic Content Through Slots</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<p>
			You can use
			<CodeSnippet>
				<svelte:fragment slot="code">{'<slot />'}</svelte:fragment>
			</CodeSnippet>
			and
			<CodeSnippet>
				<svelte:fragment slot="code">{'<svelte:fragment />'}</svelte:fragment>
			</CodeSnippet>
			to dynamically render content within a component. Here, we have a Card component that takes 'header'
			and 'content' slots.
		</p>
		<p>
			You can give slots default values as well. In the card below, you can see our Card component
			rendered with its default values - no fragments used.
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
			One awesome feature is
			<CodeSnippet>
				<svelte:fragment slot="code">{'<svelte:self />'}</svelte:fragment>
			</CodeSnippet> - this allows you to recursively build components with themselves.
		</p>
		<p>
			Our JSONTree component has a prop for <em>data</em>, which takes an iterative and iterates
			over it. When we encounter an interative data structure within said data, we recursively call
			our component with svelte:self, thus creating JSONTree components within itself. At the end of
			the day, this is just a nested list, but using svelte:self makes it super easy to do this to
			arbitrary depth.
		</p>
		<p>
			The JSONTree component also uses
			<CodeSnippet>
				<svelte:fragment slot="code">
					{'<svelte:component />'}
				</svelte:fragment>
			</CodeSnippet>
			to conditionally render different components for different types of data, seen in the background
			colors green (string), yellow (number), and other (blue). If this were real production code, we
			probably wouldn't want to abstract such a small detail into its own component. However, this shows
			a helpful pattern, there the
			<CodeSnippet>
				<svelte:fragment slot="code">this</svelte:fragment>
			</CodeSnippet>
			attribute is handled a helper function that conditionally returns one of multiple possible components.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="additional-content">
		<div
			class="my-4 rounded-xl border border-purple-300 bg-purple-100 p-3 text-sm font-extralight shadow-sm"
		>
			<h4 class="text-semibold font-mono"><span class="underline">JSON DATA</span>:</h4>
			<JsonTree data={sampleJson} />
		</div>
	</svelte:fragment>
</Card>
