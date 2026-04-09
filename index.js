/*
 * Copyright (c) New Cloud Technologies, Ltd., 2013-2026
 *
 * You can not use the contents of the file in any way without New Cloud Technologies, Ltd. written permission.
 * To obtain such a permit, you should contact New Cloud Technologies, Ltd. at http://ncloudtech.com/contact.html
 *
 */

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        './rules/lint',
        './rules/node',
        './rules/sort-keys',
        './rules/notice',
        './rules/import',
        './rules/prettier',
        './rules/react',
    ].map(require.resolve),
    ignorePatterns: ['**/copyrightTemplate.js', '**/.eslintrc.js'],
    parser: '@typescript-eslint/parser',
};
