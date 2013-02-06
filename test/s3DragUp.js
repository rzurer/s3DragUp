/*global  describe, beforeEach, afterEach, it*/
"use strict";
var assert = require('assert');
describe('uploadFromUrl', function () {
	it("should upload the original and one resized image per width to s3", function (done) {
		var regularUrl = "http://farm4.staticflickr.com/3152/2348394335_fa25a6f8f8.jpg",
			sut = require('../modules/awsS3ImageHelper').awsS3ImageHelper();
		sut.once("end", function () { done(); });
		sut.uploadFromUrl(regularUrl);
	});
});

