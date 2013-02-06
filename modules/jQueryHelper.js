/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
exports.jQueryHelper = function () {
	return {
		postFunction : function (url, input, callback) {
			$.ajax({
				type: 'POST',
				url: url,
				data: input,
				success: function (output) {
					if (callback) {
						callback(output);
					}
				}
			});
		}
	};
};