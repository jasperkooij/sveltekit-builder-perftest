export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace(
				'</head>',
				`<script async src="https://www.googletagmanager.com/gtag/js?id=G-FN7H397ES2"></script>
         <script>
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-FN7H397ES2');
         </script>
        </head>`
			)
	});

	return response;
}
