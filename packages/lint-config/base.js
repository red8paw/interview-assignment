import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import turboPlugin from 'eslint-plugin-turbo'

export const config = defineConfig([
  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        projectService: true,
      },
    },
    extends: [ts.configs.recommendedTypeChecked, ts.configs.stylisticTypeChecked],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: false,
        },
      ],
    },
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    rules: {
      'import/order': 'warn',
      // ? module bundler => end up with a lot of false positive reports of missing dependencies
      'import/no-unresolved': 'off',
    },
  },

  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },

  {
    ignores: [
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
      'node_modules/**',
      '.next/**',
      '.turbo/**',
    ],
  },
])
