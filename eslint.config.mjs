import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		plugins: {
			js,
			import: pluginImport,
			"jsx-a11y": pluginJsxA11y
		},
		ignores: [
			"dist/**",
			"backend/dist/**",
			"frontend/dist/**",
			"node_modules/**"
		],
		extends: ["js/recommended"],
		rules: {
			"import/order": [
				"error",
				{
					alphabetize: {
						order: "asc",
						caseInsensitive: false,
						orderImportKind: "asc"
					}
				}
			],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/triple-slash-reference": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/consistent-type-assertions": "off",
			"jsx-a11y/anchor-is-valid": "off",
			"no-irregular-whitespace": "error",
			semi: ["error", "always", { omitLastInOneLineBlock: false }], // точка с запятой обязательна
			indent: ["error", "tab", { SwitchCase: 1 }], // табы для отступов
			"comma-dangle": ["error", "never"], // нет запятой в конце объектов/массивов
			quotes: ["error", "double", { allowTemplateLiterals: true }], // двойные кавычки, шаблоны разрешены
			"react/prop-types": "off", // отключаем prop-types для React (TypeScript)
			"@typescript-eslint/no-unused-vars": ["warn"], // предупреждение для неиспользуемых переменных
			"@typescript-eslint/no-empty-object-type": "off", // выключаем запрет на пустые типы объектов
			"no-console": ["warn"], // предупреждение при console.log
			"space-before-blocks": ["error", "always"], // пробел перед {
			"comma-spacing": ["error", { before: false, after: true }], // пробел после запятой, перед запятой нет
			// "space-before-function-paren": [
			// 	"error",
			// 	{ anonymous: "never", named: "always" }
			// ], // c пробелом между именем функции и (
			"arrow-spacing": ["error", { before: true, after: true }], // пробелы вокруг стрелок
			"object-curly-spacing": ["error", "always"], // пробелы внутри фигурных скобок
			"key-spacing": ["error", { beforeColon: false, afterColon: true }], // пробел после двоеточия в объектах
			"no-trailing-spaces": ["error"], // нет пробелов в конце строки
			"eol-last": ["error", "always"], // всегда пустая строка в конце файла
			"keyword-spacing": ["error", { before: true, after: true }], // пробелы вокруг ключевых слов if, else и т.д.
			"prefer-const": ["error"], // использовать const, если переменная не меняется
			curly: ["error", "all"], // всегда использовать фигурные скобки в блоках if/else и т.п.
			eqeqeq: ["error", "always"], // всегда === и !==
			"no-multi-spaces": ["error"] // запрет на множественные пробелы
		}
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		languageOptions: {
			globals: globals.browser
		}
	},
	tseslint.configs.recommended
]);
