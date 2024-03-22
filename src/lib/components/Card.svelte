<script lang="ts">
</script>

<div
	class="flex w-2/3 flex-col items-center gap-3 rounded-lg border border-purple-800 bg-purple-50 px-5 py-3 text-purple-950 shadow-xl"
>
	<header>
		<slot name="header">
			<h3 class="font-mono text-lg">This is the default header!</h3>
		</slot>
	</header>
	<div class="flex min-w-full flex-col gap-2 indent-5 font-light">
		<slot name="content">
			<p>
				If you haven't added a Svelte Fragment for "<em>content</em>", you will see this default
				content.
			</p>
		</slot>
	</div>
	<slot name="additional-content" />
</div>
