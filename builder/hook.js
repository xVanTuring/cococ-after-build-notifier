/* eslint-disable  */

'use strict';
const notifier = require('node-notifier');

exports.onAfterBuild = function (options, result) {
    notifier.notify({
        title: '靓仔，包打好了🚀',
        message: '快去快去'
    });
}
