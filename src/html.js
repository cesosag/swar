const html = (htmlString, styles) => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
			${styles}
			<title>Star Wars React App</title>
		</head>
		<body>
			<div id="root">${htmlString}</div>
			<script src="app.js" type="text/javascript"></script>
		</body>
	</html>
`

export default html
