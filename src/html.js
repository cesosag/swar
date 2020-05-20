const html = (htmlString, styles, manifest, helmet, apolloState) => {
	const vendorsFile = manifest ? manifest['vendors.js'] : '/vendors.js'
	const appFile = manifest ? manifest['main.js'] : '/app.js'

	return `
		<!DOCTYPE html>
		<html lang="en" ${helmet?.htmlAttributes?.toString()}>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
				${styles}
				${helmet?.title?.toString()}
				${helmet?.meta?.toString()}
				${helmet?.link?.toString()}
			</head>
			<body ${helmet?.bodyAttributes?.toString()}>
				<div id="root">${htmlString}</div>
				<script>window.__APOLLO_STATE__ = ${JSON.stringify(apolloState).replace(/</g, '\\u003c')}</script>
				<script src="${vendorsFile}" type="text/javascript"></script>
				<script src="${appFile}" type="text/javascript"></script>
			</body>
		</html>
	`
}

export default html
