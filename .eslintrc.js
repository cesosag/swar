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
		'import/prefer-default-export': ['off'],
		indent: ['error', 'tab'],
		'max-len': ['warn', { code: 160 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'node/no-unsupported-features/es-syntax': ['off'],
		'node/no-missing-import': ['error', { tryExtensions: ['.js', '.jsx', '.json'] }],
		'react/jsx-indent': ['error', 'tab'],
		semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
	},
}
