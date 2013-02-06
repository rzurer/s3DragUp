"use strict";
exports.router = function (urls, jQueryHelper) {
    var post = jQueryHelper.postFunction;
    return {
        uploadFromUrl : function (url, callback) {
            post(urls.uploadFromUrl, { url: url }, callback);
        }
    };
};