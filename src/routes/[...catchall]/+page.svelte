<!-- src/routes/[...catchall]/+page.svelte -->

<script>
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';

	const apiKey = import.meta.env.VITE_PUBLIC_BUILDER_API_KEY;
	const model = 'page';

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;

	// show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing();
</script>

<main>
	<!-- TO DO: Add your Public API Key in <Content/>-->
	{#if canShowContent}
		<div>page Title: {data.content?.data?.title || 'Unpublished'}</div>
		<Content {model} content={data.content} {apiKey} />
	{:else}
		Content Not Found
	{/if}
</main>
