"use strict";
exports.s3DragUp = function (common) {
	var that = {
			heartbeat : function (callback) {
				if (callback) {
					callback('Welcome from s3DragUp. The current date is '+ common.getCurrentDateTime());
				}
			}
		};
	return that;
};