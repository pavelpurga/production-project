import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import {defineConfig} from 'eslint/config';
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: {js},
        extends: ['js/recommended'],
        languageOptions: {globals: globals.browser}
    },
    i18next.configs['flat/recommended'],
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'object-curly-spacing': ['error', 'always'],
            'quotes': ['error', 'single', {avoidEscape: true}],
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
        overrides: [{
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }]
    },
]);
