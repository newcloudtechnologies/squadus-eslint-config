/*
 * Copyright (c) New Cloud Technologies, Ltd., 2013-2026
 *
 * You can not use the contents of the file in any way without New Cloud Technologies, Ltd. written permission.
 * To obtain such a permit, you should contact New Cloud Technologies, Ltd. at http://ncloudtech.com/contact.html
 *
 */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: null,
                custom: {
                    regex: '^[a-zA-Z0-9-_/@$]+$',
                    match: true,
                    message:
                        'Only latin symbols and digits are allowed in naming',
                },
                // need to explain all of them otherwise there will be errors in config files such as this one
                selector: [
                    'function',
                    'variable',
                    'class',
                    'classMethod',
                    'classProperty',
                    'enum',
                    'enumMember',
                    'interface',
                    'parameter',
                    'typeAlias',
                    'typeMethod',
                    'typeParameter',
                    'typeProperty',
                ],
            },
        ],
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'array-callback-return': 'error',
        'comma-spacing': ['warn', { after: true, before: false }],
        curly: 'error',
        // require === and !== instead of == and != https://eslint.org/docs/latest/rules/eqeqeq
        eqeqeq: 'error',
        'max-params': ['error', 3],
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        // https://typescript-eslint.io/rules/no-dupe-class-members/
        'no-dupe-class-members': 'off',
        'no-else-return': 'error',
        'no-extra-semi': 2,
        'no-undef': 'error',
        'react-hooks/immutability': 'warn',
        'react-hooks/refs': 'warn',
        'react-hooks/set-state-in-effect': 'warn',
        'react-hooks/set-state-in-render': 'warn',
        'react-hooks/static-components': 'warn',
    },
};
