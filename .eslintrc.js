module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:node/recommended',
		'airbnb',
		'airbnb/hooks',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'arrow-body-style': ['warn', 'as-needed'],
		'import/prefer-default-export': ['off'],
		indent: ['warn', 'tab'],
		'max-len': ['warn', { code: 160 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-unused-vars': ['warn'],
		'node/no-unsupported-features/es-syntax': ['off'],
		'node/no-missing-import': ['error', { tryExtensions: ['.js', '.jsx', '.json'] }],
		'object-curly-newline': ['off'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-props-no-spreading': ['warn', { html: 'ignore', exceptions: ['Tag'] }],
		'react/prop-types': ['warn', { ignore: ['children'] }],
		semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
		strict: ['off'],
	},
}
