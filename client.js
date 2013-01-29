/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
var initialize = function () {
	var dragDropControl = require('./modules/dragDropControl').dragDropControl();
	window.dragDropControl = dragDropControl;
};
initialize();

