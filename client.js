/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
var initialize = function () {
	var urls = require('./modules/urls').urls,
		jQueryHelper = require('./modules/jQueryHelper').jQueryHelper(),
		router = require('./modules/router').router(urls, jQueryHelper),
		dragDropControl = require('./modules/dragDropControl').dragDropControl();
	window.dragDropControl = dragDropControl;
	window.router = router;
};
initialize();

