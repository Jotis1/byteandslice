import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylisticJS from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        plugins: {
            '@stylistic/js': stylisticJS
        },
        rules: {
            '@stylistic/js/arrow-parens': ['warn', 'as-needed'],
            '@stylistic/js/arrow-spacing': ['warn', { before: true, after: true }],
            '@stylistic/js/block-spacing': ['warn', 'always'],
            '@stylistic/js/comma-spacing': ['warn', { before: false, after: true }],
            '@stylistic/js/comma-style': ['warn', 'last'],
            '@stylistic/js/func-call-spacing': ['warn', 'never'],
            '@stylistic/js/indent': ['warn', 4],
            '@stylistic/js/key-spacing': ['warn', { beforeColon: false, afterColon: true }],
            '@stylistic/js/keyword-spacing': ['warn', { before: true, after: true }],
            '@stylistic/js/max-len': ['warn', { code: 120, comments: 120 }],
            '@stylistic/js/no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
            semi: ['warn', 'always'],
            quotes: ['warn', 'single'],
        }
    }
];

export default eslintConfig;
