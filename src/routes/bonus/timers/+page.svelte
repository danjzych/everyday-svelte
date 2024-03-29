<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import debounce from '$lib/utils/debounce';
	import getDummyData from './getDummyData';

	let testData: number;

	function setTestData() {
		testData = getDummyData();
	}

	setTestData();

	const debouncedSetTestData = debounce(setTestData, 1000);

	function handleInput() {
		debouncedSetTestData();
	}
</script>

<Card>
	<svelte:fragment slot="header">
		<h3 class="font-mono text-lg">Debounce</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div>
			{testData}
		</div>
		<p>Try out debounce below:</p>
		<input type="text" on:input={handleInput} />
	</svelte:fragment>
</Card>
