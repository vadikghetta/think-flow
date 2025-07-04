import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import baseConfig from "../eslint.config.mjs";

export default [
	...baseConfig,
	{
		files: ["**/*.{ts,tsx,js,jsx}"],
		plugins: {
			"react": pluginReact,
			"react-hooks": pluginReactHooks,
			"react-refresh": pluginReactRefresh
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		rules: {
			"react/jsx-uses-react": "off", // не нужен с React 17+
			"react/react-in-jsx-scope": "off", // не нужен с React 17+
			"react/jsx-uses-vars": "warn",
			"@typescript-eslint/consistent-type-definitions": "off",
			// ✅ React Hooks
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",

			// ✅ React Fast Refresh
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
		},
		settings: {
			react: {
				version: "detect" // автоматическое определение версии React
			}
		}
	}
];
