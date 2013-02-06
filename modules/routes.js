"use strict";
exports.routes = function () {
	var awsS3ImageHelper = require('./awsS3ImageHelper').awsS3ImageHelper();
    return {
        initialize : function (app) {
            app.get('/', function (req, res) {
                res.render('s3DragUp');
            });
			app.post('/uploadFromUrl', function (req, res) {
				var url, callback;
				url = req.param('url');
				awsS3ImageHelper.once('end', function (featuresArray) {
					res.send({length : featuresArray.length});
				});
				awsS3ImageHelper.uploadFromUrl(url, callback);
			});
        }
    };
};