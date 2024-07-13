module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	// import/no-unresolved 에러를 해겨하기 위해 import 설정 추가
	plugins: ['import', 'react', '@typescript-eslint'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/no-unresolved': [
			'warn',
			{
				commonjs: true,
				ignore: ['click-to-react-component'],
			},
		],
		'no-mixed-spaces-and-tabs': 0,
	},
	settings: {
		react: {
			version: '18.2.0',
		},
	},
}
