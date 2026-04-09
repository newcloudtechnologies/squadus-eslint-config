/*
 * Copyright (c) New Cloud Technologies, Ltd., 2013-2026
 *
 * You can not use the contents of the file in any way without New Cloud Technologies, Ltd. written permission.
 * To obtain such a permit, you should contact New Cloud Technologies, Ltd. at http://ncloudtech.com/contact.html
 *
 */
/* eslint-disable @typescript-eslint/no-var-requires*/

const path = require('path');

module.exports = {
    plugins: ['notice'],
    rules: {
        'notice/notice': [
            'error',
            {
                messages: {
                    whenFailedToMatch:
                        "Couldn't find 'Copyright', are you sure you added it?",
                },
                nonMatchingTolerance: 1,
                onNonMatchingHeader: 'replace',
                templateFile: path.resolve(
                    __dirname,
                    '../copyrightTemplate.js',
                ),
            },
        ],
    },
};
