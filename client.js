/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
	var initialize = function () {
		var common = require('./modules/common').common(),
			s3DragUp = require('./modules/s3DragUp').s3DragUp(common);
			window.s3DragUp = s3DragUp;
	};
initialize();

