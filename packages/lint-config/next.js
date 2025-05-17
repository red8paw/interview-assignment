import { defineConfig } from 'eslint/config'
import reactPlugin from 'eslint-plugin-react'
import hookPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import globals from 'globals'

import { config as baseConfig } from './base.js'

export const config = defineConfig([
  baseConfig,

  {
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    plugins: {
      'react-hooks': hookPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...hookPlugin.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
])
