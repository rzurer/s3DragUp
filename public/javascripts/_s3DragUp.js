/*globals  $, window*/
"use strict";
var initializeModule = function () {
	var healthCheck = function (date) {
		$('.s3DragUpContainer').text(date);
	};
	$(function () {
		window.s3DragUp.heartbeat(healthCheck);
	});
};