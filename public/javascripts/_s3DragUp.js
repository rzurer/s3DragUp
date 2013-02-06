/*globals  $, window*/
"use strict";
var noImageSrc = 'images/dropImageHere.png',
	dragDropControl,
	router,
	onFileDropped = function (files) {
		$('#dropImage').attr("src", noImageSrc);
	},
	onUrlDropped = function (url) {
		$('#dropImage').attr("src", url && url.length > 0 ? url : noImageSrc);
		$('#dropImage').css("width", '300px');
		router.uploadFromUrl(url, function (output) {
			alert(output.length);
		});
	},
	ready = function () {
		$(function () {
			dragDropControl = window.dragDropControl;
			router = window.router;
			$('#dropImage').attr("src", noImageSrc);
			dragDropControl.ready($('.dragDropControlContainer'), $('#dropImage'));
			dragDropControl.addListener('fileDropped', onFileDropped);
			dragDropControl.addListener('urlDropped', onUrlDropped);
		});
	};