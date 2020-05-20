const html = (htmlString, styles, manifest, helmet) => {
	const vendorsFile = manifest ? manifest['vendors.js'] : '/vendors.js'
	const appFile = manifest ? manifest['main.js'] : '/app.js'

	return `
		<!DOCTYPE html>
		<html lang="en" ${helmet.htmlAttributes.toString()}>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
				${styles}
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}
			</head>
			<body ${helmet.bodyAttributes.toString()}>
				<div id="root">${htmlString}</div>
				<script src="${vendorsFile}" type="text/javascript"></script>
				<script src="${appFile}" type="text/javascript"></script>
			</body>
		</html>
	`
}

export default html
