// src/routes/[...catchall]/+page.server.js

import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';
const apiKey = import.meta.env.VITE_PUBLIC_BUILDER_API_KEY;

export async function load(event) {
	// fetch your Builder content
	const content = await fetchOneEntry({
		model: 'page',
		apiKey: apiKey,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
		urlPath: event.url.pathname || '/',
	},
});
	return { content };
}
