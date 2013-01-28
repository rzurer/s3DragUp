"use strict";
exports.dragDropControl = function () {
	var dropZone,
		Emitter = require('events').EventEmitter,
		emitter = new Emitter(),
		stopPropagation = function (e) {
			if (e.stopPropagation) {
				e.stopPropagation();
			}
			try {
				e.returnValue = false;
			} catch (ex) {}
		},
		preventDefault = function (e) {
			if (e.preventDefault) {
				e.preventDefault();
			}
			try {
				e.returnValue = false;
			} catch (ex) {}
		},
		initEvent = function (event) {
			preventDefault(event);
			stopPropagation(event);
		},
		doDragOver = function (event) {
			initEvent(event);
		},
		doDragEnter = function (event) {
			initEvent(event);
			dropZone.addClass('hover');
		},
		doDragLeave = function (event) {
			initEvent(event);
			dropZone.removeClass('hover');
		},
		doDrop = function (event) {
			var files, url;
			initEvent(event);
			files = event.dataTransfer.files;
			if (files.length > 0) {
				emitter.emit('fileDropped', [files]);
				dropZone.removeClass('hover');
				return;
			}
			url = event.dataTransfer.getData("text/x-moz-url");
			if (!url || url === 'undefined') {
				url = event.dataTransfer.getData("URL");
			}
			emitter.emit('urlDropped', [url]);
			dropZone.removeClass('hover');
		},
		initializeEvents = function (containerControl, imageControl) {
			var container, image;
			dropZone = containerControl;
			image = imageControl.get(0);
			if(image){
				image.addEventListener("dragover", doDragOver, true);
				image.addEventListener("drop", doDrop, true);
				image.addEventListener("dragenter", doDragEnter, true);
				image.addEventListener("dragleave", doDragLeave, true);				
			}
		},
		that = {
			ready : function (dropZone, dropImage) {
				initializeEvents(dropZone, dropImage);
			},
			addListener : function (event, listener) {
				emitter.addListener(event, listener);
			},
			removeListener : function (event, listener) {
				emitter.removeListener(event, listener);
			}
		};
	return that;
};