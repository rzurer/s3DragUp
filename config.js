'use strict';
function configure(app, express, flash, browserify) {
    app.configure(function () {
        var pub, 
        bundle,
        pub = __dirname + '/public';
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.set('view cache');
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.session({ secret: "keyboard cat" }));
        app.use(flash());
        app.use(express.logger());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(function (req, res, next) {
            res.header('Cache-Control', "max-age=31557600000, public");
            next();
        });
        bundle = browserify(__dirname + '/client.js');
        app.use(bundle);
        app.use(express.errorHandler({dumpExceptions: true}));
        app.use(express.static(pub));
    });
}
exports.configure = configure;



