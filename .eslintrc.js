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
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
		'node/no-unsupported-features/es-syntax': 'off',
	},
}
