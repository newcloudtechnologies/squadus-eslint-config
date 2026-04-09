/*
 * Copyright (c) New Cloud Technologies, Ltd., 2013-2026
 *
 * You can not use the contents of the file in any way without New Cloud Technologies, Ltd. written permission.
 * To obtain such a permit, you should contact New Cloud Technologies, Ltd. at http://ncloudtech.com/contact.html
 *
 */
module.exports = {
    plugins: ['import'],
    extends: ['plugin:import/recommended'],
    rules: {
        'import/default': 'error',
        'import/named': 'error',
        'import/namespace': 'off',
        'import/no-duplicates': 'error',
        'import/no-named-as-default-member': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    ['index', 'sibling', 'parent'],
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: '@squadus/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: 'react*',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@squadus/mobileClient/**'],
            },
        ],
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
